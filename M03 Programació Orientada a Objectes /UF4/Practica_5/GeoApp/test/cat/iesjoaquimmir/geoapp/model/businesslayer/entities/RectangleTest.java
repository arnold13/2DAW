/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.geoapp.model.businesslayer.entities;

import java.lang.reflect.Modifier;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author Arnold
 */
public class RectangleTest {
    
      //<editor-fold defaultstate="collapsed" desc="Objectes simulació">
    private Rectangle r1, r2, r3, r4,r5;
    
    private Color c1 , c2 ;
    
    
//</editor-fold>
    
     //<editor-fold defaultstate="collapsed" desc="Inicialització">
    public RectangleTest() {
    }    
//</editor-fold>
 
    //<editor-fold defaultstate="collapsed" desc="TestCase Cicle de vida">
    @BeforeClass
    public static void loadTest() {
        System.out.println("Se carga el siguiente test que corresponde a: "+ RectangleTest.class.getSimpleName());
    }
    
    @Before
    public void setUp() {
        
        c1 = new Color(Color.MAX_VALUE,Color.MIN_VALUE,95);
        
        c2 = new Color(Color.MIN_VALUE,156,94);
        
        r1 = new Rectangle(50.0,20.0,c1,c2); 
        
        r2 = new Rectangle();
 
        r3 = new Rectangle(2.5,2.5); 
        
        r4 = new Rectangle(2.5, 2.5, c1 ,c2);
 
    }
    
    @After
    public void tearDown() {
    }
    
    @AfterClass
    public static void unLoadTest() {
        System.out.println(" Descargandose el siguiente test: " + ColorTest.class.getSimpleName());
    }
        
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Test metodos">
    
    //<editor-fold defaultstate="collapsed" desc="Atributos privados">
    
            //<editor-fold defaultstate="collapsed" desc="Atributos privados">

                    @Test
            public void lado1_privado() throws NoSuchFieldException {
                Class r = Rectangle.class;
                Assert.assertTrue("Lado1 privado ----> 'Incorrecto' " , Modifier.isPrivate(r.getDeclaredField("lado1").getModifiers()));
            }

                @Test
            public void lado2_privado() throws NoSuchFieldException {
                Class r = Rectangle.class;
                Assert.assertTrue("Lado2 privado ----> 'Incorrecto' ", Modifier.isPrivate(r.getDeclaredField("lado2").getModifiers()));
            }

        //</editor-fold>
    
    
    
//</editor-fold>
    
            
    //<editor-fold defaultstate="collapsed" desc="Constructores">
            
    @Test
    public void Numero_de_elementos_en_el_constructor() {
        Class r = Rectangle.class;
        int Numero_constructores = r.getConstructors().length; // Numero de constructores de la classe rectangulo actual
        
        Assert.assertEquals("Número de constructors no vàlid", 4 , Numero_constructores);
    }
  
    
    @Test
    public void Constructor_con_todos_los_parametros() {
       
        Rectangle r = new Rectangle(50.0, 20.0, c1, c2);
       
         Assert.assertEquals("Lado 1 = 50 ---> 'Fallo' ", 50.0 , r.getLado1(),50);
    
         
    }
    
           
     @Test(expected = IllegalArgumentException.class)
     
     public void Numeros_negativos(){
         
         Rectangle r = new Rectangle(-1.0,-2.0);
         
     }

     
     
    
            
    //</editor-fold>
            
//</editor-fold>
    
}
