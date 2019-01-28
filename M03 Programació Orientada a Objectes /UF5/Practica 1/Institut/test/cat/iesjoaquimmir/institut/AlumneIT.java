/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.institut;

import cat.iesjoaquimmir.institut.Exception.Max_Moduls;
import java.util.ArrayList;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author Arnold
 * 
 * Este Junit test solo revisa las excepciones del primer punto, es que no sabia si
 * hacer un test era valido para la practica, que me decante por solo hacer una parte con test.
 * 
 */
public class AlumneIT {
    
    //<editor-fold defaultstate="collapsed" desc="Objetos de simulacion">
    
    Alumne alumne;
    
    Domicili domicili;
    
    ArrayList<String> telefons;
    
     ArrayList<Modul> moduls;
    
//</editor-fold>
    
    public AlumneIT() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        
         domicili = new Domicili("Industria", "24", 
                            "2n 1a", "08800", "Badalona", "Barcelona");
      
         alumne = new Alumne("Pedro", "García", "Ramírez",
              "55655678J", 220, domicili);
           
        telefons = new ArrayList<>();
        telefons.add("943434334");
        telefons.add("943434334");
        telefons.add("943434334");
        
        alumne.setTelefons(telefons);

        
       moduls = new ArrayList<>();
       
       moduls.add(new Modul("M01","Sistemas operativos",130));
       
       moduls.add(new Modul("M02","Sistemas UNIX",130));
       
       moduls.add(new Modul("M03","Sistemas OS X",130));
       
       moduls.add(new Modul("M04","Sistemas Windows",130));
       
       moduls.add(new Modul("M05","Angles",130));
       
       alumne.setModuls(moduls);
    }
    
    @After
    public void tearDown() {
    }

     @Test(expected = Max_Moduls.class)
    public void Modulo_Horas_Maxima() throws Max_Moduls{
        
    
  
       
       alumne.setModul_to_Array(new Modul("M06", 50));
       
                
    }
    
   
    @Test(expected = ArithmeticException.class)
    public void Numeros_Negativos_Domicilio(){
        
    domicili.setNumero("-1");
              
    }
    
   @Test(expected = IllegalArgumentException.class)
    public void DNI_vacio_Error(){
        
        alumne.setDni("");
    
    }
    
    
    @Test(expected = ArithmeticException.class)
    public void DNI_longitud_Error(){
       
        alumne.setDni("X11231231231231X");
        
    }
    
    @Test(expected = NumberFormatException.class)
    public void Longitud_Telefonos_Error(){
        
        
        alumne.setTelefon_to_Array("9341234223"); // 10 caracteres cuando deberia tener 9
        
        alumne.setTelefons(telefons);
        
     
    }
    
    @Test(expected = ArithmeticException.class)
    public void Numero_de_modulos_por_alumno_Error(){
        
        moduls.remove(0);
        moduls.remove(0);
        moduls.remove(0);
        moduls.remove(0);
        moduls.remove(0);
        
      alumne.setModuls(moduls);

        
        
    }
    


}
