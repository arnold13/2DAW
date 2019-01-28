/* Fitxer: Excepcio02.java
   Descripci�: Exemple d'excepci� de la classe RuntimeException 
               provocada per error de programaci� i capturada
   Autor: Isidre Guix�
*/

public class Excepcio02
{
   public static void main(String args[])
   {
      String t[]={"Hola","Ad�u","Fins dem�"};
      try
      {
         System.out.println("Abans d'executar el for");
         for (int i=0; i<=t.length; i++)
            System.out.println("Posici� " + i + " : " + t[i]);
         System.out.println("Despr�s d'executar el for");
      }
      catch (ArrayIndexOutOfBoundsException e)
      {
         System.out.println("El programador estava a la lluna... S'ha sortir de l�mits!!!");
      }
      System.out.println("Final del programa");      
   }
}