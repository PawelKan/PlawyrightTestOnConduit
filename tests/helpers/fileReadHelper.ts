import * as fs from 'fs';
import * as path from 'path';

const pathToUserDataFile = path.resolve(__dirname, '../.auth/actualUserData.json');

/**
 * User credentials are saved in json file actualUserData.
 */
export function saveUserData(userName: string, userMail: string, userPass: string): void {
    // Create .auth folder if not exist
    const dir = path.dirname(pathToUserDataFile);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    const userData = {
        registeredUser: {
            USER_NAME: userName,
            USER_MAIL: userMail,
            USER_PASS: userPass
        }
    };

    fs.writeFileSync(pathToUserDataFile, JSON.stringify(userData, null, 2), 'utf-8');
}

/**
 * Read user from file actualUserData.json
 * If file doesn't exist, returny empty values.
 */
export function getUserData() {
    if (!fs.existsSync(pathToUserDataFile)) {
        return { USER_NAME: '', USER_MAIL: '', USER_PASS: '' };
    }

    const fileContent = fs.readFileSync(pathToUserDataFile, 'utf-8');
    const savedData = JSON.parse(fileContent);
    return savedData.registeredUser;
}
