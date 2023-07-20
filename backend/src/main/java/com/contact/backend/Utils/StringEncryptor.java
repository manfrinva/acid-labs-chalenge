package com.contact.backend.Utils;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class StringEncryptor {
    private static final String AES_ALGORITHM = "AES";
    private static final String AES_MODE = "ECB";
    private static final String AES_PADDING = "PKCS5Padding";
    private static final int AES_KEY_SIZE = 128; // Tamanho da chave em bits (128 bits neste exemplo)

    public static String encryptString(String strToEncrypt, String encryptionKey) {
        try {
            byte[] keyBytes = new byte[AES_KEY_SIZE / 8];
            System.arraycopy(encryptionKey.getBytes(StandardCharsets.UTF_8), 0, keyBytes, 0,
                    Math.min(encryptionKey.length(), keyBytes.length));
            SecretKeySpec secretKey = new SecretKeySpec(keyBytes, AES_ALGORITHM);
            Cipher cipher = Cipher.getInstance(AES_ALGORITHM + "/" + AES_MODE + "/" + AES_PADDING);
            cipher.init(Cipher.ENCRYPT_MODE, secretKey);
            byte[] encryptedBytes = cipher.doFinal(strToEncrypt.getBytes(StandardCharsets.UTF_8));
            return Base64.getEncoder().encodeToString(encryptedBytes);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
