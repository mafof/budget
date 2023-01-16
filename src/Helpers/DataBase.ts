/**
 * Класс содержащий разные нетривиальные методы
 */

import { Platform } from 'react-native'
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

class DataBase {
  public static async exportDBToPhone(nameDataBase: string): Promise<void> {
    if (Platform.OS === "android") {
      const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (permissions.granted) {
        const base64 = await FileSystem.readAsStringAsync(
          FileSystem.documentDirectory + `SQLite/${nameDataBase}`,
          {
            encoding: FileSystem.EncodingType.Base64
          }
        );

        await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, nameDataBase, 'application/octet-stream')
        .then(async (uri) => {
          await FileSystem.writeAsStringAsync(uri, base64, { encoding : FileSystem.EncodingType.Base64 });
        })
        .catch((e) => console.log(e));
      } else {
        console.log("Permission not granted");
      }
    } else {
      await Sharing.shareAsync(FileSystem.documentDirectory + `SQLite/${nameDataBase}`);
    }
  }
}

export default DataBase;