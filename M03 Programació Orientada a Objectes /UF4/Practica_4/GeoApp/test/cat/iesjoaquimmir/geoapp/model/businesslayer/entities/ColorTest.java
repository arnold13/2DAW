/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.geoapp.model.businesslayer.entities;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.Date;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author toni
 */
public class ColorTest {
    
    //<editor-fold defaultstate="collapsed" desc="Objectes simulació">
    private Color c1, c2, c3, c4, c5, c6, c7, c8, c9;
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Inicialització">
    public ColorTest() {
    }    
//</editor-fold>
        
    //<editor-fold defaultstate="collapsed" desc="TestCase Cicle de vida">
    @BeforeClass
    public static void loadTest() {
        System.out.printf("Es carrega el joc de proves %s al Test Runner.%n", ColorTest.class.getSimpleName());
    }
    
    @Before
    public void setUp() {
        c1 = new Color(Color.MIN_VALUE, Color.MIN_VALUE, Color.MIN_VALUE);
        c2 = new Color(Color.MAX_VALUE, Color.MAX_VALUE, Color.MAX_VALUE);
        c3 = new Color(Color.MAX_VALUE, Color.MIN_VALUE, Color.MIN_VALUE);
        c4 = new Color(Color.MIN_VALUE, Color.MAX_VALUE, Color.MIN_VALUE);
        c5 = new Color();
        c6 = new Color(240, 248, 255);
        c7 = new Color(135, 5, 50);
        c8 = new Color(64, 224, 208);
        c9 = new Color(154, 205, 50);
    }
    
    @After
    public void tearDown() {
    }
    
    @AfterClass
    public static void unLoadTest() {
        System.out.printf("S'està descarregant el joc de proves %s del test-runner.%n", ColorTest.class.getSimpleName());
    }
        
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Test Mètodes">
    //<editor-fold defaultstate="collapsed" desc="Atributs privats">
    @Test
    public void attribute_red_private() throws NoSuchFieldException {
        Class c = Color.class;
        Assert.assertTrue("red private --> Fail!!", Modifier.isPrivate(c.getDeclaredField("red").getModifiers()));
    }
    
    @Test
    public void attribute_green_private() throws NoSuchFieldException {
        Class c = Color.class;
        Assert.assertTrue("green private --> Fail!!", Modifier.isPrivate(c.getDeclaredField("green").getModifiers()));
    }
    
    @Test
    public void attribute_blue_private() throws NoSuchFieldException {
        Class c = Color.class;
        Assert.assertTrue("blue private --> Fail!!", Modifier.isPrivate(c.getDeclaredField("blue").getModifiers()));
    }
    
    @Test
    public void attribute_static_MIN_VALUE() {
        Assert.assertEquals("Color.MIN_VALUE --> Fail!!", 0, Color.MIN_VALUE);
    }
    
    @Test
    public void attribute_static_MIN_VALUE_final() throws NoSuchFieldException {
        Class c = Color.class;
        Field f = c.getField("MIN_VALUE");
        Assert.assertTrue("Color.MIN_VALUE is final --> Fails!!", Modifier.isFinal(f.getModifiers()));
    }
    
    @Test
    public void attribute_static_MAX_VALUE() {
        Assert.assertEquals("Color.MAX_VALUE --> Fail!!", 255, Color.MAX_VALUE);
    }
    
    @Test
    public void attribute_static_MAX_VALUE_final() throws NoSuchFieldException {
        Class c = Color.class;
        Field f = c.getField("MAX_VALUE");
        Assert.assertTrue("Color.MAX_VALUE is final --> Fails!!", Modifier.isFinal(f.getModifiers()));
    }

    @Test
    public void attribute_counter_private() throws NoSuchFieldException {
        Class c = Color.class;
        Assert.assertTrue("counter private --> Fail!!", Modifier.isPrivate(c.getDeclaredField("counter").getModifiers()));
    }    
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Constructors">
    @Test
    public void ctor_num() {
        Class c = Color.class;
        int numOfConstructors = c.getConstructors().length;
        Assert.assertEquals("Número de constructors no vàlid", 2, numOfConstructors);
    }

    @Test
    public void ctor_3params_125_200_100() {
       Color c = new Color(125, 200, 100);
       Assert.assertEquals("constructor(name, red, green, blue) --> red Fails!!", 125, c.getRed());
       Assert.assertEquals("constructor(name, red, green, blue) --> green Fails!!", 200, c.getGreen());
       Assert.assertEquals("constructor(name, red, green, blue) --> blue Fails!!", 100, c.getBlue());
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void ctor_3params_red_upper_error() {
       Color c = new Color(256, 200, 100);
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void ctor_3params_red_lower_error() {
       Color c = new Color(-10, 200, 100);
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void ctor_3params_green_upper_error() {
       Color c = new Color(255, 1200, 100);
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void ctor_3params_green_lower_error() {
       Color c = new Color(125, -200, 100);
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void ctor_3params_blue_upper_error() {
       Color c = new Color(255, 120, 256);
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void ctor_3params_blue_lower_error() {
       Color c = new Color(125, 200, -1 );
    }
    
    @Test
    public void ctor_noparams() {
       Color c = new Color();
       Assert.assertEquals("constructor() --> red Fails!!", 0, c.getRed());
       Assert.assertEquals("constructor() --> green Fails!!", 0, c.getGreen());
       Assert.assertEquals("constructor() --> blue Fails!!", 0, c.getBlue());
    }
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="color.setRed(red)/color.getRed()">
    @Test
    public void color_setRed_122() {
       c1.setRed(122);
       Assert.assertEquals("c1.setRed(122) --> Fails!!", 122, c1.getRed());
    }
    
    @Test
    public void color_setRed_255() {
       c1.setRed(255);
       Assert.assertEquals("c1.setRed(255) --> Fails!!", 255, c1.getRed());
    }
    
    @Test
    public void color_setRed_0() {
       c1.setRed(0);
       Assert.assertEquals("c1.setRed(0) --> Fails!!", 0, c1.getRed());
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void color_setRed_upper_error() {
       c1.setRed(256);
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void color_setRed_lower_error() {
       c1.setRed(-1);
    }
        
//</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="color.setGreen(green)/color.getGreen()">
    @Test
    public void color_setGreen_122() {
       c1.setGreen(122);
       Assert.assertEquals("c1.setGreen(122) --> Fails!!", 122, c1.getGreen());
    }
    
    @Test
    public void color_setGreen_255() {
       c1.setGreen(255);
       Assert.assertEquals("c1.setGreen(255) --> Fails!!", 255, c1.getGreen());
    }
    
    @Test
    public void color_setGreen_0() {
       c1.setGreen(0);
       Assert.assertEquals("c1.setGreen(0) --> Fails!!", 0, c1.getGreen());
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void color_setGreen_upper_error() {
       c1.setGreen(256);
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void color_setGreen_lower_error() {
       c1.setGreen(-1);
    }
        
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="color.setBlue(blue)/color.getBlue()">
    @Test
    public void color_setBlue_122() {
       c1.setBlue(122);
       Assert.assertEquals("c1.setBlue(122) --> Fails!!", 122, c1.getBlue());
    }
    
    @Test
    public void color_setBlue_255() {
       c1.setBlue(255);
       Assert.assertEquals("c1.setBlue(255) --> Fails!!", 255, c1.getBlue());
    }
    
    @Test
    public void color_setBlue_0() {
       c1.setBlue(0);
       Assert.assertEquals("c1.setBlue(0) --> Fails!!", 0, c1.getBlue());
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void color_setBlue_upper_error() {
       c1.setBlue(256);
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void color_setBlue_lower_error() {
       c1.setBlue(-1);
    }
        
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="color.toRGBString(true)">
    @Test
    public void color_0_0_0_toRGBString_upper() {
       Assert.assertEquals("c1.toRGBString(true) --> Fails!!", "RGB(0, 0, 0)", c1.toRGBString(true));
    }
    
    @Test
    public void color_255_255_255_toRGBString_upper() {
       Assert.assertEquals("c2.toRGBString(true) --> Fails!!", "RGB(255, 255, 255)", c2.toRGBString(true));
    }
    
    @Test
    public void color_255_0_0_toRGBString_upper() {
       Assert.assertEquals("c1.toRGBString(true) --> Fails!!", "RGB(255, 0, 0)", c3.toRGBString(true));
    }
    
    @Test
    public void color_0_255_0_toRGBString_upper() {
       Assert.assertEquals("c4.toRGBString(true) --> Fails!!", "RGB(0, 255, 0)", c4.toRGBString(true));
    }
    
    @Test
    public void color_toRGBString_upper() {
       Assert.assertEquals("c5.toRGBString(true) --> Fails!!", "RGB(0, 0, 0)", c5.toRGBString(true));
    }
 
    @Test
    public void color_240_248_255_toRGBString_upper() {
       Assert.assertEquals("c6.toRGBString(true) --> Fails!!", "RGB(240, 248, 255)", c6.toRGBString(true));
    }
    
    @Test
    public void color_135_5_50_toRGBString_upper() {
       Assert.assertEquals("c7.toRGBString(true) --> Fails!!", "RGB(135, 5, 50)", c7.toRGBString(true));
    }
    
    @Test
    public void color_64_224_208_toRGBString_upper() {
       Assert.assertEquals("c8.toRGBString(true) --> Fails!!", "RGB(64, 224, 208)", c8.toRGBString(true));
    }
    
    @Test
    public void color_154_205_50_toRGBString_upper() {
       Assert.assertEquals("c9.toRGBString(true) --> Fails!!", "RGB(154, 205, 50)", c9.toRGBString(true));
    }
        
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="color.toRGBString(false)">
    @Test
    public void color_0_0_0_toRGBString_lower() {
       Assert.assertEquals("c1.toRGBString(false) --> Fails!!", "rgb(0, 0, 0)", c1.toRGBString(false));
    }
    
    @Test
    public void color_255_255_255_toRGBString_lower() {
       Assert.assertEquals("c2.toRGBString(false) --> Fails!!", "rgb(255, 255, 255)", c2.toRGBString(false));
    }
    
    @Test
    public void color_255_0_0_toRGBString_lower() {
       Assert.assertEquals("c1.toRGBString(false) --> Fails!!", "rgb(255, 0, 0)", c3.toRGBString(false));
    }
    
    @Test
    public void color_0_255_0_toRGBString_lower() {
       Assert.assertEquals("c4.toRGBString(false) --> Fails!!", "rgb(0, 255, 0)", c4.toRGBString(false));
    }

    @Test
    public void color_toRGBString_lower() {
       Assert.assertEquals("c5.toRGBString(false) --> Fails!!", "rgb(0, 0, 0)", c5.toRGBString(false));
    }
    
    @Test
    public void color_240_248_255_toRGBString_lower() {
       Assert.assertEquals("c6.toRGBString(false) --> Fails!!", "rgb(240, 248, 255)", c6.toRGBString(false));
    }
    
    @Test
    public void color_135_5_50_toRGBString_lower() {
       Assert.assertEquals("c7.toRGBString(false) --> Fails!!", "rgb(135, 5, 50)", c7.toRGBString(false));
    }
    
    @Test
    public void color_64_224_208_toRGBString_lower() {
       Assert.assertEquals("c8.toRGBString(false) --> Fails!!", "rgb(64, 224, 208)", c8.toRGBString(false));
    }
    
    @Test
    public void color_154_205_50_toRGBString_lower() {
       Assert.assertEquals("c9.toRGBString(false) --> Fails!!", "rgb(154, 205, 50)", c9.toRGBString(false));
    } 
//</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="color.toRGBString()">
    @Test
    public void color_0_0_0_toRGBString() {
       Assert.assertEquals("c1.toRGBString() --> Fails!!", "rgb(0, 0, 0)", c1.toRGBString());
    }
    
    @Test
    public void color_255_255_255_toRGBString() {
       Assert.assertEquals("c2.toRGBString() --> Fails!!", "rgb(255, 255, 255)", c2.toRGBString());
    }
    
    @Test
    public void color_255_0_0_toRGBString() {
       Assert.assertEquals("c1.toRGBString() --> Fails!!", "rgb(255, 0, 0)", c3.toRGBString());
    }
    
    @Test
    public void color_0_255_0_toRGBString() {
       Assert.assertEquals("c4.toRGBString() --> Fails!!", "rgb(0, 255, 0)", c4.toRGBString());
    }
    
    @Test
    public void color_toRGBString() {
       Assert.assertEquals("c5.toRGBString() --> Fails!!", "rgb(0, 0, 0)", c5.toRGBString());
    }
    
    @Test
    public void color_240_248_255_toRGBString() {
       Assert.assertEquals("c6.toRGBString() --> Fails!!", "rgb(240, 248, 255)", c6.toRGBString());
    }
    
    @Test
    public void color_135_5_50_toRGBString() {
       Assert.assertEquals("c7.toRGBString() --> Fails!!", "rgb(135, 5, 50)", c7.toRGBString());
    }
    
    @Test
    public void color_64_224_208_toRGBString() {
       Assert.assertEquals("c8.toRGBString() --> Fails!!", "rgb(64, 224, 208)", c8.toRGBString());
    }
    
    @Test
    public void color_154_205_50_toRGBString() {
       Assert.assertEquals("c9.toRGBString() --> Fails!!", "rgb(154, 205, 50)", c9.toRGBString());
    }
    
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="color.toHexString(true)">
    @Test
    public void color_0_0_0_toHexString_upper() {
       Assert.assertEquals("c1.toHexString(true) --> Fails!!", "#000000", c1.toHexString(true));
    }
    
    @Test
    public void color_255_255_255_toHexString_upper() {
       Assert.assertEquals("c2.toHexString(true) --> Fails!!", "#FFFFFF", c2.toHexString(true));
    }
    
    @Test
    public void color_255_0_0_toHexString_upper() {
       Assert.assertEquals("c1.toHexString(true) --> Fails!!", "#FF0000", c3.toHexString(true));
    }
    
    @Test
    public void color_0_255_0_toHexString_upper() {
       Assert.assertEquals("c4.toHexString(true) --> Fails!!", "#00FF00", c4.toHexString(true));
    }
    
    @Test
    public void color_toHexString_upper() {
       Assert.assertEquals("c5.toHexString(true) --> Fails!!", "#000000", c5.toHexString(true));
    }
    
    @Test
    public void color_240_248_255_toHexString_upper() {
       Assert.assertEquals("c6.toHexString(true) --> Fails!!", "#F0F8FF", c6.toHexString(true));
    }
    
    @Test
    public void color_135_5_50_toHexString_upper() {
        Assert.assertEquals("c7.toHexString(true) --> Fails!!", "#870532", c7.toHexString(true));
    }
    
    @Test
    public void color_64_224_208_toHexString_upper() {
       Assert.assertEquals("c8.toHexString(true) --> Fails!!", "#40E0D0", c8.toHexString(true));
    }
    
    @Test
    public void color_154_205_50_toHexString_upper() {
       Assert.assertEquals("c9.toHexString(true) --> Fails!!", "#9ACD32", c9.toHexString(true));
    }
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="color.toHexString(false)">
    @Test
    public void color_0_0_0_toHexString_lower() {
       Assert.assertEquals("c1.toHexString(false) --> Fails!!", "#000000", c1.toHexString(false));
    }
    
    @Test
    public void color_255_255_255_toHexString_lower() {
       Assert.assertEquals("c2.toHexString(false) --> Fails!!", "#ffffff", c2.toHexString(false));
    }
    
    @Test
    public void color_255_0_0_toHexString_lower() {
       Assert.assertEquals("c1.toHexString(false) --> Fails!!", "#ff0000", c3.toHexString(false));
    }
    
    @Test
    public void color_0_255_0_toHexString_lower() {
       Assert.assertEquals("c4.toHexString(false) --> Fails!!", "#00ff00", c4.toHexString(false));
    }
    
    @Test
    public void color_toHexString_lower() {
       Assert.assertEquals("c5.toHexString(false) --> Fails!!", "#000000", c5.toHexString(false));
    }
    
    @Test
    public void color_240_248_255_toHexString_lower() {
       Assert.assertEquals("c6.toHexString(false) --> Fails!!", "#f0f8ff", c6.toHexString(false));
    }
    
    @Test
    public void color_135_5_50_toHexString_lower() {
       Assert.assertEquals("c7.toHexString(false) --> Fails!!", "#870532", c7.toHexString(false));
    }
    
    @Test
    public void color_64_224_208_toHexString_lower() {
       Assert.assertEquals("c8.toHexString(false) --> Fails!!", "#40e0d0", c8.toHexString(false));
    }
    
    @Test
    public void color_154_205_50_toHexString_lower() {
       Assert.assertEquals("c9.toHexString(false) --> Fails!!", "#9acd32", c9.toHexString(false));
    }
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="color.toHexString()">
    @Test
    public void color_0_0_0_toHexString() {
       Assert.assertEquals("c1.toHexString() --> Fails!!", "#000000", c1.toHexString());
    }
    
    @Test
    public void color_255_255_255_toHexString() {
       Assert.assertEquals("c2.toHexString() --> Fails!!", "#FFFFFF", c2.toHexString());
    }
    
    @Test
    public void color_255_0_0_toHexString() {
       Assert.assertEquals("c1.toHexString() --> Fails!!", "#FF0000", c3.toHexString());
    }
    
    @Test
    public void color_0_255_0_toHexString() {
        Assert.assertEquals("c4.toHexString() --> Fails!!", "#00FF00", c4.toHexString());
    }
    
    @Test
    public void color_toHexString() {
       Assert.assertEquals("c5.toHexString() --> Fails!!", "#000000", c5.toHexString());    }
    
    @Test
    public void color_240_248_255_toHexString() {
       Assert.assertEquals("c6.toHexString() --> Fails!!", "#F0F8FF", c6.toHexString());
    }

    @Test
    public void color_135_5_50_toHexString() {
       Assert.assertEquals("c7.toHexString() --> Fails!!", "#870532", c7.toHexString());
    }
    
    @Test
    public void color_64_224_208_toHexString() {
       Assert.assertEquals("c8.toHexString() --> Fails!!", "#40E0D0", c8.toHexString());
    }
    
    @Test
    public void color_154_205_50_toHexString() {
       Assert.assertEquals("c9.toHexString() --> Fails!!", "#9ACD32", c9.toHexString());
    }
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Color.fromHexString(string)">
    @Test(expected = NullPointerException.class)
    public void Color_fromHexString_null_error() {
        Color.fromHexString(null);
    }
    
    @Test(expected = NullPointerException.class)
    public void Color_fromHexString_empty_error() {
        Color.fromHexString("");
    }
    
    @Test(expected = NullPointerException.class)
    public void Color_fromHexString_whitespaces_error() {
        Color.fromHexString("  ");
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void Color_fromHexString_nohex_hola_error() {
        Color.fromHexString("hola");
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void Color_fromHexString_nohex_gggggg_error() {
        Color.fromHexString("gggggg");
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void Color_fromHexString_nohex_ffffff_error() {
        Color.fromHexString("ffffff");
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void Color_fromHexString_nohex_0101_error() {
        Color.fromHexString("#0101");
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void Color_fromHexString_nohex_aabbcc0_error() {
        Color.fromHexString("#aabbcc0");
    }
    
    @Test
    public void Color_fromHexString_000000() {
       Color c = Color.fromHexString("#000000");
       Assert.assertEquals("Color.fromHexString(\"#000000\") --> red Fails!!", 0, c.getRed());
       Assert.assertEquals("Color.fromHexString(\"#000000\") --> green Fails!!", 0, c.getGreen());
       Assert.assertEquals("Color.fromHexString(\"#000000\") --> blue Fails!!", 0, c.getBlue());
    }
    
    @Test
    public void Color_fromHexString_FFFFFF() {
       Color c = Color.fromHexString("#FFFFFF");
       Assert.assertEquals("Color.fromHexString(\"#FFFFFF\") --> red Fails!!", 255, c.getRed());
       Assert.assertEquals("Color.fromHexString(\"#FFFFFF\") --> green Fails!!", 255, c.getGreen());
       Assert.assertEquals("Color.fromHexString(\"#FFFFFF\") --> blue Fails!!", 255, c.getBlue());
    }
    
    @Test
    public void Color_fromHexString_ffffff() {
       Color c = Color.fromHexString("#ffffff");
       Assert.assertEquals("Color.fromHexString(\"#ffffff\") --> red Fails!!", 255, c.getRed());
       Assert.assertEquals("Color.fromHexString(\"#ffffff\") --> green Fails!!", 255, c.getGreen());
       Assert.assertEquals("Color.fromHexString(\"#ffffff\") --> blue Fails!!", 255, c.getBlue());
    }
    
    @Test
    public void Color_fromHexString_FF0000() {
       Color c = Color.fromHexString("#FF0000");
       Assert.assertEquals("Color.fromHexString(\"#FF0000\") --> red Fails!!", 255, c.getRed());
       Assert.assertEquals("Color.fromHexString(\"#FF0000\") --> green Fails!!", 0, c.getGreen());
       Assert.assertEquals("Color.fromHexString(\"#FF0000\") --> blue Fails!!", 0, c.getBlue());
    }
    
    @Test
    public void Color_fromHexString_00FF00() {
       Color c = Color.fromHexString("#00FF00");
       Assert.assertEquals("Color.fromHexString(\"#00FF00\") --> red Fails!!", 0, c.getRed());
       Assert.assertEquals("Color.fromHexString(\"#00FF00\") --> green Fails!!", 255, c.getGreen());
       Assert.assertEquals("Color.fromHexString(\"#00FF00\") --> blue Fails!!", 0, c.getBlue());
    }
    
    @Test
    public void Color_fromHexString_F0F8FF() {
       Color c = Color.fromHexString("#F0F8FF");
       Assert.assertEquals("Color.fromHexString(\"#F0F8FF\") --> red Fails!!", 240, c.getRed());
       Assert.assertEquals("Color.fromHexString(\"#F0F8FF\") --> green Fails!!", 248, c.getGreen());
       Assert.assertEquals("Color.fromHexString(\"#F0F8FF\") --> blue Fails!!", 255, c.getBlue());
    }
    
    @Test
    public void Color_fromHexString_f0f8ff() {
       Color c = Color.fromHexString("#f0f8ff");
       Assert.assertEquals("Color.fromHexString(\"#f0f8ff\") --> red Fails!!", 240, c.getRed());
       Assert.assertEquals("Color.fromHexString(\"#f0f8ff\") --> green Fails!!", 248, c.getGreen());
       Assert.assertEquals("Color.fromHexString(\"#f0f8ff\") --> blue Fails!!", 255, c.getBlue());
    }
    
    @Test
    public void Color_fromHexString_870532() {
       Color c = Color.fromHexString("#870532");
       Assert.assertEquals("Color.fromHexString(\"#870532\") --> red Fails!!", 135, c.getRed());
       Assert.assertEquals("Color.fromHexString(\"#870532\") --> green Fails!!", 5, c.getGreen());
       Assert.assertEquals("Color.fromHexString(\"#870532\") --> blue Fails!!", 50, c.getBlue());
    }
    
    @Test
    public void Color_fromHexString_40E0D0() {
       Color c = Color.fromHexString("#40E0D0");
       Assert.assertEquals("Color.fromHexString(\"#40E0D0\") --> red Fails!!", 64, c.getRed());
       Assert.assertEquals("Color.fromHexString(\"#40E0D0\") --> green Fails!!", 224, c.getGreen());
       Assert.assertEquals("Color.fromHexString(\"#40E0D0\") --> blue Fails!!", 208, c.getBlue());
    }
    
    @Test
    public void Color_fromHexString_40e0d0() {
       Color c = Color.fromHexString("#40e0d0");
       Assert.assertEquals("Color.fromHexString(\"#40e0d0\") --> red Fails!!", 64, c.getRed());
       Assert.assertEquals("Color.fromHexString(\"#40e0d0\") --> green Fails!!", 224, c.getGreen());
       Assert.assertEquals("Color.fromHexString(\"#40e0d0\") --> blue Fails!!", 208, c.getBlue());
    }
    
    @Test
    public void Color_fromHexString_9ACD32() {
       Color c = Color.fromHexString("#9ACD32");
       Assert.assertEquals("Color.fromHexString(\"#9ACD32\") --> red Fails!!", 154, c.getRed());
       Assert.assertEquals("Color.fromHexString(\"#9ACD32\") --> green Fails!!", 205, c.getGreen());
       Assert.assertEquals("Color.fromHexString(\"#9ACD32\") --> blue Fails!!", 50, c.getBlue());
    }
    
    @Test
    public void Color_fromHexString_9acd32() {
       Color c = Color.fromHexString("#9acd32");
       Assert.assertEquals("Color.fromHexString(\"#9acd32\") --> red Fails!!", 154, c.getRed());
       Assert.assertEquals("Color.fromHexString(\"#9acd32\") --> green Fails!!", 205, c.getGreen());
       Assert.assertEquals("Color.fromHexString(\"#9acd32\") --> blue Fails!!", 50, c.getBlue());
    }    
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="c1.equals(c2)">
    @Test
    public void color_equals_null_false() {
        Assert.assertFalse("color.equals(null): False --> Fails", c1.equals(null));
    }
    
    @Test
    public void color_equals_string_false() {
        Assert.assertFalse("color.equals(\"hola\"): False --> Fails", c1.equals("hola"));
    }
    
    @Test
    public void color_equals_date_false() {
        Assert.assertFalse("color.equals(\"new Date()\"): False --> Fails", c1.equals(new Date()));
    }
    
    @Test
    public void color_equals_true_01() {
        Color co1 = new Color();
        Color co2 = new Color();
        Assert.assertTrue("co1.equals(co2): True --> Fails", co1.equals(co2));
    }
    
    @Test
    public void color_equals_true_02() {
        Color co1 = new Color(240, 248, 255);
        Color co2 = new Color(240, 248, 255);
        Assert.assertTrue("co1.equals(co2): True --> Fails", co1.equals(co2));
    }
    
    @Test
    public void color_equals_true_03() {
        Color co1 = new Color(0, 0, 0);
        Color co2 = new Color();
        Assert.assertTrue("co1.equals(co2): True --> Fails", co1.equals(co2));
    }
    
    @Test
    public void color_equals_false_01() {
        Color co1 = new Color(255, 255, 255);
        Color co2 = new Color();
        Assert.assertFalse("co1.equals(co2): False --> Fails", co1.equals(co2));
    }
    
    @Test
    public void color_equals_false_02() {
        Color co1 = new Color(240, 248, 255);
        Color co2 = new Color(0, 0, 0);
        Assert.assertFalse("co1.equals(co2): False --> Fails", co1.equals(co2));
    }
    
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Escenario: color.hashCode()">
    @Test
    public void color_hashCode_true_01() {
        Color co1 = new Color();
        Color co2 = new Color();
        Assert.assertEquals("co1.hashCode() == co2.hashCode() --> Fails", co1.hashCode(), co2.hashCode());
    }
    
    @Test
    public void color_hashCode_true_02() {
        Color co1 = new Color(240, 248, 255);
        Color co2 = new Color(240, 248, 255);
        Assert.assertEquals("co1.hashCode() == co2.hashCode() --> Fails", co1.hashCode(), co2.hashCode());
    }
    
    @Test
    public void color_hashCode_true_03() {
        Color co1 = new Color(0, 0, 0);
        Color co2 = new Color();
        Assert.assertEquals("co1.hashCode() == co2.hashCode() --> Fails", co1.hashCode(), co2.hashCode());
    }
    
    @Test
    public void color_hashCode_false_01() {
        Color co1 = new Color(240, 248, 255);
        Color co2 = new Color(0, 0, 0);
        Assert.assertNotSame("co1.equals(co2): False --> Fails", co1.equals(co2));
    }
    
    @Test
    public void color_hashCode_false_02() {
        Color co1 = new Color();
        Color co2 = new Color(0, 0, 0);
        Assert.assertNotSame("co1.equals(co2): False --> Fails", co1.equals(co2));
    }
    
//</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Escenario: color.toString()">
    @Test
    public void color_toString() {
        Color co1 = new Color(240, 248, 255);
        Assert.assertTrue("color.toString() --> Nuestra la coord. R del color", co1.toString().contains(String.valueOf(co1.getRed())));
        Assert.assertTrue("color.toString() --> Nuestra la coord. G del color", co1.toString().contains(String.valueOf(co1.getGreen())));
        Assert.assertTrue("color.toString() --> Nuestra la coord. B del color", co1.toString().contains(String.valueOf(co1.getBlue())));
    }
    //</editor-fold>
    
//</editor-fold>

}
