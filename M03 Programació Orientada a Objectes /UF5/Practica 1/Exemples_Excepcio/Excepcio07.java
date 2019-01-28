/* Fitxer: Excepcio07.java
   Descripció: Exemple de programa que no gestiona excepcions susceptibles
               de ser llançades per un mètode i que no són RuntimeException.
               El compilador no compila el fitxer.
   Autor: Isidre Guixà
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
