/* Fitxer: Excepcio09.java
   Descripci�: Exemple de llan�ament d'excepci� d'obligada gesti� en un m�tode
   Autor: Isidre Guix�
*/

public class Excepcio09
{
   static void verificaLengthTaula (int n, String t[]) throws Exception
   /* M�tode que avalua si la taula t t� n cel�les, provocant, en cas de ser avaluada com a fals,
      una excepci� d'obligada gesti�: Exception */
   {
      if (t.length!=n) throw new Exception ("La taula no t� la llargada indicada.");
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