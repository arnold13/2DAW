/* Fitxer: Excepcio10.java
   Descripci�: Exemple de llan�ament d'excepci� RuntimeException en un m�tode
   Autor: Isidre Guix�
*/

public class Excepcio10
{
   static void verificaLengthTaula (int n, String t[])
   /* M�tode que avalua si la taula t t� n cel�les, provocant, en cas de ser avaluada com a fals,
      una excepci� RuntimeException */
   {
      if (t.length!=n) throw new RuntimeException ("La taula no t� la llargada indicada.");
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