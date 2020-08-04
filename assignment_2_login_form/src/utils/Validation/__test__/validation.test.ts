import { validateEmail, handleValidationForm } from '../validation';

describe('validation', () => {
    describe('Function validateEmail', () => {
        it('should return false when email is invalid format', () => {
            expect(validateEmail('test')).toBeFalsy();
        });

        it('should return true when email is valid', () => {
            expect(validateEmail('test@test.com')).toBeTruthy();
        });
    });

    describe('Function handleValidationForm', () => {
        it('should return error email empty msg', () => {
            expect(handleValidationForm({ email: '' }).email).toBe(
                'Email cannot be empty'
            );
        });

        it('should return error email invalid msg', () => {
            expect(handleValidationForm({ email: 'test' }).email).toBe(
                'Invalid Email'
            );
        });

        it('should return error password empty msg', () => {
            expect(handleValidationForm({ password: '' }).password).toBe(
                'Cannot be empty'
            );
        });

        it('should not return error password', () => {
            expect(handleValidationForm({ password: 'test123' }).password).toBeUndefined();
        });

        it('should return error newPassword empty msg', () => {
            expect(handleValidationForm({ newPassword: '' }).newPassword).toBe(
                'Cannot be empty'
            );
        });
    });
});