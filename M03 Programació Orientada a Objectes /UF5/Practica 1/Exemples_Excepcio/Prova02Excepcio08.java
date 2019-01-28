/* Fitxer: Prova02Excepcio08.java
   Descripci�: Exemple de m�tode que invoca un m�tode amb cl�usula "throws" sense gestionar
               totes les excepcions indicades a la cl�usula. El compilador no tradueix el fitxer.
   Autor: Isidre Guix�
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
         System.out.println("S'ha capturat l'excepci� FileNotFoundException");
      }
      System.out.println("El programa ha finalitzat.");
   }
}
