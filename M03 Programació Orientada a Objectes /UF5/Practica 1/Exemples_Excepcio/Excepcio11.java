/* Fitxer: Excepcio11.java
   Descripci�: Exemple d'excepci� creada pel programador
   Autor: Isidre Guix�
*/

public class Excepcio11
{
   public static void main (String args[])
   {
      try
      {
         provocoExcepcio(0);
         provocoExcepcio(10);
      }
      catch (LaMevaException e)
      {
         e.printStackTrace();
      }
      System.out.println ("El programa finalitza correctament");
   }
   
   public static void provocoExcepcio(int valor) throws LaMevaException
   {
      System.out.println ("Valor: " + valor);
      if (valor!=0) throw new LaMevaExcepction (valor);
      System.out.println ("No s'ha provocat l'excepci�.");
   }
}

class LaMevaExcepction extends Exception
{
   private Integer valor;
   
   public LaMevaExcepction (int xxx)
   {
      valor = new Integer(xxx);
   }
   
   public String toString ()
   {
      return "Exception LaMevaExcepction: Error motivat per valor = " + valor.toString();
   }
}
