/* Fitxer: Excepcio08.java
   Descripci�: Exemple de m�tode que opta per no capturar excepcions d'obligada gesti�
               tot delegant la gesti� als m�todes que l'invoquin.
   Autor: Isidre Guix�
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
