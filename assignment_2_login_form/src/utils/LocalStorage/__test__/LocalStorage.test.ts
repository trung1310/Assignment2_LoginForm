import jwt from 'jwt-decode';
import {
    storeUserDataWithDecodedJWT,
    LOCAL_STORAGE_PROFILE,
    storeUpdatedUserData,
    retrieveUserProfile,
    LOCAL_STORAGE_ACCESS_TOKEN_KEY,
    retrieveToken,
} from '../LocalStorage';
import { Profile } from '../../../features/profile/types';

const mockToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1NRG5wdGVXNU5WRUY2b0JrWm5XIiwiYXZhdGFyIjoiIiwiZGlzcGxheU5hbWUiOiJIZWxsbyBQeXRob24iLCJlbWFpbCI6ImhlbGxvcHl0aG9uQHB5dGhvbi5oZWxsbyIsIm5hbWUiOiJIZWxsbyBQeXRob24iLCJwaG9uZSI6IjA5MDM0NTY3ODkiLCJpYXQiOjE1OTY0NTIzODh9.7mcVj3wD7ihGV1iRwxg0Xs9o70ODA1ZwLN46VNHos8g';

describe('LocalStorage', () => {
    describe('Function storeUserDataWithDecodedJWT', () => {
        it('should save to localStorage', () => {
            const decoded = jwt(mockToken) as Profile;
            storeUserDataWithDecodedJWT(mockToken, decoded);
            expect(Object.keys(localStorage.__STORE__).length).toBe(3);
        });
        it('should be last called with key LOCAL_STORAGE_PROFILE and data is decoded string', () => {
            const decoded = jwt(mockToken) as Profile;
            expect(localStorage.setItem).toHaveBeenLastCalledWith(
                LOCAL_STORAGE_PROFILE,
                JSON.stringify(decoded)
            );
        });

        it('should be store correctly data with key LOCAL_STORAGE_PROFILE', () => {
            const decoded = jwt(mockToken) as Profile;
            expect(localStorage.__STORE__[LOCAL_STORAGE_PROFILE]).toBe(
                JSON.stringify(decoded)
            );
        });
    });

    describe('Function storeUpdatedUserData', () => {
        it('should save to localStorage', () => {
            const storedData = {
                name: 'Test 001',
                avatar: 'Avatar 001',
                email: 'test001@test.com',
                phone: '090xxx090',
                displayName: 'Test 001',
                id: 'test_001',
            };
            storeUpdatedUserData(storedData);
            expect(localStorage.setItem).toHaveBeenLastCalledWith(
                LOCAL_STORAGE_PROFILE,
                JSON.stringify(storedData)
            );
        });
    });

    describe('Function retrieveUserProfile', () => {
        it('Should get correctly retrieve data that was stored before', () => {
            const storedData = {
                name: 'Test 001',
                avatar: 'Avatar 001',
                email: 'test001@test.com',
                phone: '090xxx090',
                displayName: 'Test 001',
                id: 'test_001',
            };
            localStorage.setItem(LOCAL_STORAGE_PROFILE, JSON.stringify(storedData));
            expect(retrieveUserProfile()).toEqual(storedData);
        });
    });

    describe('Function retrieveToken', () => {
        it('should throw error when there is no token', () => {
            localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, '');
            expect(() => {
                retrieveToken();
            }).toThrow(Error);
        });

        it('should return correct token', () => {
            localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, '@custom_token');
            expect(retrieveToken()).toBe('@custom_token');
        });
    });
});