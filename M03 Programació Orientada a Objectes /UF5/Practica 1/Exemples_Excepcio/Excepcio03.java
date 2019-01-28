/* Fitxer: Excepcio03.java
   Descripci�: Exemple d'excepci� provocada per error de programaci�
               amb intent erroni de captura i amb exemple de bloc finally
   Autor: Isidre Guix�
*/

public class Excepcio03
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
      catch (StringIndexOutOfBoundsException e)
      {
         System.out.println("El programador estava a la lluna... S'ha sortir de l�mits!!!");
      }
      finally
      {
         System.out.println("Aquest codi s'executa, peti qui peti!!!");
      }
      System.out.println("Final del programa");      
   }
}