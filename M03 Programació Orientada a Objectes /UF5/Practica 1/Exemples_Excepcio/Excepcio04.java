/* Fitxer: Excepcio04.java
   Descripció: Exemple de propagació de l'excepció cap el mètode superior
               en cas de no ser tractada en el propi mètode i, avortament
               del programa si la propagació arriba fins el mètode main()
               sense cap gestió.
   Autor: Isidre Guixà
*/

public class Excepcio04
{
   static void met02()
   {
      String t[]={"Hola","Adéu","Fins demà"};
      for (int i=0; i<=t.length; i++)
         System.out.println("Posició " + i + " : " + t[i]);
      System.out.println("El mètode met02 s'ha acabat.");
   }
   
   static void met01()
   {
      System.out.println("Entrem en el mètode met01 i anem a executar met02");
      met02();
      System.out.println("Tornem a estar en met02 després de finalitzar met02");
   }

   public static void main(String args[])
   {
      System.out.println("Iniciem el programa i anem a executar met01");
      met01();
      System.out.println("Tornem a estar en el main després de finalitzar met01");
   }
}