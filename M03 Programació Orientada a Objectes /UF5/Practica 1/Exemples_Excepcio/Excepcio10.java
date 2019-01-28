/* Fitxer: Excepcio10.java
   Descripció: Exemple de llançament d'excepció RuntimeException en un mètode
   Autor: Isidre Guixà
*/

public class Excepcio10
{
   static void verificaLengthTaula (int n, String t[])
   /* Mètode que avalua si la taula t té n cel·les, provocant, en cas de ser avaluada com a fals,
      una excepció RuntimeException */
   {
      if (t.length!=n) throw new RuntimeException ("La taula no té la llargada indicada.");
      System.out.println ("Sortida de verificaLengthTaula.");
   }
   
   public static void main (String args[])
   {
      System.out.println("Punt 1.");
      verificaLengthTaula (4, new String[4]);
      System.out.println("Punt 2.");
      verificaLengthTaula (2, new String[4]);
      System.out.println("Punt 3.");
      System.out.println ("Programa finalitzat.");
   }
}