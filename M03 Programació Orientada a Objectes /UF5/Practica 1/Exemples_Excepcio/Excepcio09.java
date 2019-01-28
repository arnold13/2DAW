/* Fitxer: Excepcio09.java
   Descripció: Exemple de llançament d'excepció d'obligada gestió en un mètode
   Autor: Isidre Guixà
*/

public class Excepcio09
{
   static void verificaLengthTaula (int n, String t[]) throws Exception
   /* Mètode que avalua si la taula t té n cel·les, provocant, en cas de ser avaluada com a fals,
      una excepció d'obligada gestió: Exception */
   {
      if (t.length!=n) throw new Exception ("La taula no té la llargada indicada.");
      System.out.println ("Sortida de verificaLengthTaula.");
   }
   
   public static void main (String args[])
   {
      try
      {
         System.out.println("Punt 1.");
         verificaLengthTaula (4, new String[4]);
         System.out.println("Punt 2.");
         verificaLengthTaula (2, new String[4]);
         System.out.println("Punt 3.");
      }
      catch (Exception e)
      {
         e.printStackTrace();
      }
      System.out.println ("Programa finalitzat.");
   }
}