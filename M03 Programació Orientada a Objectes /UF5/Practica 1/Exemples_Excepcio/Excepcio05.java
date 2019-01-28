/* Fitxer: Excepcio05.java
   Descripci�: Exemple de propagaci� de l'excepci� cap el m�tode superior
               trobant un m�tode abans d'arribar al m�tode main() que captura
               l'excepci�.
   Autor: Isidre Guix�
*/

public class Excepcio05
{
   static void met03()
   {
      String t[]={"Hola","Ad�u","Fins dem�"};
      for (int i=0; i<=t.length; i++)
         System.out.println("Posici� " + i + " : " + t[i]);
      System.out.println("El m�tode met03 s'ha acabat.");
   }
   
   static void met02()
   {
      System.out.println("Entrem en el m�tode met02 i anem a executar met03");
      met03();
      System.out.println("Tornem a estar en met02 despr�s de finalitzar met03");
   }

   static void met01()
   {
      try
      {
         System.out.println("Entrem en el m�tode met01 i anem a executar met02");
         met02();
         System.out.println("Tornem a estar en met01 despr�s de finalitzar met02");
      }
      catch (ArrayIndexOutOfBoundsException e)
      {
         System.out.println("El programador estava a la lluna... S'ha sortir de l�mits!!!");
      }
   }

   public static void main(String args[])
   {
      System.out.println("Iniciem el programa i anem a executar met01");
      met01();
      System.out.println("Tornem a estar en el main despr�s de finalitzar met01");
   }
}