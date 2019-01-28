/* Fitxer: Excepcio05.java
   Descripció: Exemple de propagació de l'excepció cap el mètode superior
               trobant un mètode abans d'arribar al mètode main() que captura
               l'excepció.
   Autor: Isidre Guixà
*/

public class Excepcio05
{
   static void met03()
   {
      String t[]={"Hola","Adéu","Fins demà"};
      for (int i=0; i<=t.length; i++)
         System.out.println("Posició " + i + " : " + t[i]);
      System.out.println("El mètode met03 s'ha acabat.");
   }
   
   static void met02()
   {
      System.out.println("Entrem en el mètode met02 i anem a executar met03");
      met03();
      System.out.println("Tornem a estar en met02 després de finalitzar met03");
   }

   static void met01()
   {
      try
      {
         System.out.println("Entrem en el mètode met01 i anem a executar met02");
         met02();
         System.out.println("Tornem a estar en met01 després de finalitzar met02");
      }
      catch (ArrayIndexOutOfBoundsException e)
      {
         System.out.println("El programador estava a la lluna... S'ha sortir de límits!!!");
      }
   }

   public static void main(String args[])
   {
      System.out.println("Iniciem el programa i anem a executar met01");
      met01();
      System.out.println("Tornem a estar en el main després de finalitzar met01");
   }
}