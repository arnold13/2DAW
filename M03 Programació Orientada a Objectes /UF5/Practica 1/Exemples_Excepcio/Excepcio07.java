/* Fitxer: Excepcio07.java
   Descripci�: Exemple de programa que no gestiona excepcions susceptibles
               de ser llan�ades per un m�tode i que no s�n RuntimeException.
               El compilador no compila el fitxer.
   Autor: Isidre Guix�
*/
import java.io.*;

public class Excepcio07
{
   public static void main (String args[])
   {
      FileOutputStream f = new FileOutputStream ("C:\\arxiu.txt");
      f.close();
   }
}
