 import { random } from 'lodash';
 import { getBankAccount, InsufficientFundsError, TransferFailedError, SynchronizationFailedError } from '.';
 
 jest.mock('lodash');

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const input = 200;
    const expectedProperty = '_balance';
  
    const newBankAccount = getBankAccount(input); 
    
    expect(newBankAccount).toHaveProperty(expectedProperty, input);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const initialBalance = 200;
    const withdrawAmount = 300;
    const newBankAccount = getBankAccount(initialBalance); 
        
    expect(() => {newBankAccount.withdraw(withdrawAmount)}).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const initialBalance = 200;
    const transferAmount = 300;
    const newBankAccount = getBankAccount(initialBalance); 
    const newBankAccount2 = getBankAccount(initialBalance); 
        
    expect(() => {newBankAccount.transfer(transferAmount, newBankAccount2)}).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const initialBalance = 200;
    const transferAmount = 100;
    const newBankAccount = getBankAccount(initialBalance); 
        
    expect(() => {newBankAccount.transfer(transferAmount, newBankAccount)}).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const initialBalance = 200;
    const amount = 100;
    const expectedResult = initialBalance + amount; 
    const newBankAccount = getBankAccount(initialBalance); 
    
    const actualResult = newBankAccount.deposit(amount).getBalance();
        
    expect(actualResult).toBe(expectedResult);
  });

  test('should withdraw money', () => {
    const initialBalance = 200;
    const amount = 100;
    const expectedResult = initialBalance - amount; 
    const newBankAccount = getBankAccount(initialBalance); 
    
    const actualResult = newBankAccount.withdraw(amount).getBalance();
        
    expect(actualResult).toBe(expectedResult);
  });

  test('should transfer money', () => {
    const initialBalance = 200;
    const amount = 100;
    const expectedResultAccount1 = initialBalance - amount; 
    const expectedResultAccount2 = initialBalance + amount; 
    const newBankAccount = getBankAccount(initialBalance); 
    const newBankAccount2 = getBankAccount(initialBalance); 
    
    const actualResultAccount1 = newBankAccount.transfer(amount, newBankAccount2).getBalance();
    const actualResultAccount2 = newBankAccount2.getBalance();
        
    expect(actualResultAccount1).toBe(expectedResultAccount1);
    expect(actualResultAccount2).toBe(expectedResultAccount2);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const initialBalance = 200;
    const newBankAccount = getBankAccount(initialBalance); 
    
    const mockedRandom = jest.mocked(random);
    mockedRandom.mockReturnValue(3);
        
    const result = await newBankAccount.fetchBalance();
    
     expect(typeof result).toBe('number');
     jest.restoreAllMocks(); 
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const initialBalance = 200;
    const newBankAccount = getBankAccount(initialBalance); 
    const expectedResult = 10;
    
    jest.spyOn(newBankAccount, 'fetchBalance').mockReturnValue(Promise.resolve(expectedResult));
        
    await newBankAccount.synchronizeBalance();
    const actualResult = newBankAccount.getBalance();
     
    expect(actualResult).toBe(expectedResult);
    jest.restoreAllMocks(); 
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const initialBalance = 200;
    const newBankAccount = getBankAccount(initialBalance); 
    
    jest.spyOn(newBankAccount, 'fetchBalance').mockReturnValue(Promise.resolve(null));
   
    await expect(newBankAccount.synchronizeBalance()).rejects.toThrow(SynchronizationFailedError);
    jest.restoreAllMocks(); 
});

});