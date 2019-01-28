/* Fitxer: Prova03Excepcio08.java
   Descripció: Exemple de mètode que invoca un mètode amb clàusula "throws" gestionant totes
               les excepcions indicades a la clàusula. El compilador sí tradueix el fitxer.
   Autor: Isidre Guixà
*/
import java.io.*;

public class Prova03Excepcio08
{
   public static void main (String args[])
   {
      if (args.length!=1)
      {
         System.out.println("La crida del programa ha d'indicar un paràmetre:");
         System.out.println("   nomArxiu amb el corresponent camí de directoris.");
         System.exit(1);
      }
      Excepcio08 exc = new Excepcio08();
      try
      {  
         exc.metodeAmbClausulaThrows(args[0]); 
      }
      catch (FileNotFoundException e)
      {  
         System.out.println("S'ha capturat l'excepció FileNotFoundException, amb informació:");
         System.out.println(e);
      }
      catch (IOException e)
      {  
         System.out.println("S'ha capturat l'excepció IOException, amb informació:");
         System.out.println(e);
      }
      System.out.println("El programa ha finalitzat.");
   }
}
