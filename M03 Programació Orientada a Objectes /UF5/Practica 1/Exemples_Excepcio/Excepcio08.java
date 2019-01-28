/* Fitxer: Excepcio08.java
   Descripció: Exemple de mètode que opta per no capturar excepcions d'obligada gestió
               tot delegant la gestió als mètodes que l'invoquin.
   Autor: Isidre Guixà
*/
import java.io.*;

class Excepcio08
{
   public void metodeAmbClausulaThrows (String nomFitxer) 
               throws FileNotFoundException, IOException
   {
      FileOutputStream f = new FileOutputStream (nomFitxer);
      f.close();
      System.out.println ("El metodeAmbClausulaThrows ha finalitzat.");
   }
}
