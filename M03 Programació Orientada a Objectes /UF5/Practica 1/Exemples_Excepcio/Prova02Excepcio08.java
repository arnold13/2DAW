/* Fitxer: Prova02Excepcio08.java
   Descripció: Exemple de mètode que invoca un mètode amb clàusula "throws" sense gestionar
               totes les excepcions indicades a la clàusula. El compilador no tradueix el fitxer.
   Autor: Isidre Guixà
*/
import java.io.*;

public class Prova02Excepcio08
{
   public static void main (String args[])
   {
      Excepcio08 exc = new Excepcio08();
      try
      {  
         exc.metodeAmbClausulaThrows("c:\\arxiu.txt"); 
      }
      catch (FileNotFoundException e)
      {  
         System.out.println("S'ha capturat l'excepció FileNotFoundException");
      }
      System.out.println("El programa ha finalitzat.");
   }
}
