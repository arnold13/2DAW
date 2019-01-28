/* Fitxer: Prova01Excepcio08.java
   Descripci�: Exemple de m�tode que invoca un m�tode amb cl�usula "throws" sense gestionar
               les excepcions indicades a la cl�usula. El compilador no tradueix el fitxer.
   Autor: Isidre Guix�
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
