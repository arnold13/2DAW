/* Fitxer: Excepcio04.java
   Descripci�: Exemple de propagaci� de l'excepci� cap el m�tode superior
               en cas de no ser tractada en el propi m�tode i, avortament
               del programa si la propagaci� arriba fins el m�tode main()
               sense cap gesti�.
   Autor: Isidre Guix�
*/

public class Excepcio04
{
   static void met02()
   {
      String t[]={"Hola","Ad�u","Fins dem�"};
      for (int i=0; i<=t.length; i++)
         System.out.println("Posici� " + i + " : " + t[i]);
      System.out.println("El m�tode met02 s'ha acabat.");
   }
   
   static void met01()
   {
      System.out.println("Entrem en el m�tode met01 i anem a executar met02");
      met02();
      System.out.println("Tornem a estar en met02 despr�s de finalitzar met02");
   }

   public static void main(String args[])
   {
      System.out.println("Iniciem el programa i anem a executar met01");
      met01();
      System.out.println("Tornem a estar en el main despr�s de finalitzar met01");
   }
}