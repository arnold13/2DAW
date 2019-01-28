/* Fitxer: Prova01Excepcio08.java
   Descripció: Exemple de mètode que invoca un mètode amb clàusula "throws" sense gestionar
               les excepcions indicades a la clàusula. El compilador no tradueix el fitxer.
   Autor: Isidre Guixà
*/
import java.io.*;

public class Prova01Excepcio08
{
   public static void main (String args[])
   {
      Excepcio08 exc = new Excepcio08();
      exc.metodeAmbClausulaThrows("c:\\arxiu.txt");
      System.out.println ("Hem tornat del metodeAmbClasulaThrows");
      System.out.println ("El programa ha finalitzat.");
   }
}
