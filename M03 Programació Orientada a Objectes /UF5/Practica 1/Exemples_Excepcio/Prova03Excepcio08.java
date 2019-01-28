/* Fitxer: Prova03Excepcio08.java
   Descripci�: Exemple de m�tode que invoca un m�tode amb cl�usula "throws" gestionant totes
               les excepcions indicades a la cl�usula. El compilador s� tradueix el fitxer.
   Autor: Isidre Guix�
*/
import java.io.*;

public class Prova03Excepcio08
{
   public static void main (String args[])
   {
      if (args.length!=1)
      {
         System.out.println("La crida del programa ha d'indicar un par�metre:");
         System.out.println("   nomArxiu amb el corresponent cam� de directoris.");
         System.exit(1);
      }
      Excepcio08 exc = new Excepcio08();
      try
      {  
         exc.metodeAmbClausulaThrows(args[0]); 
      }
      catch (FileNotFoundException e)
      {  
         System.out.println("S'ha capturat l'excepci� FileNotFoundException, amb informaci�:");
         System.out.println(e);
      }
      catch (IOException e)
      {  
         System.out.println("S'ha capturat l'excepci� IOException, amb informaci�:");
         System.out.println(e);
      }
      System.out.println("El programa ha finalitzat.");
   }
}
