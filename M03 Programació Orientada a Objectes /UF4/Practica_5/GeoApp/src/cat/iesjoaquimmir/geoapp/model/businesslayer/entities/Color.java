package cat.iesjoaquimmir.geoapp.model.businesslayer.entities;

import java.util.Random;

public class Color {
    //<editor-fold defaultstate="collapsed" desc="Estat: Atributs">
    private int red;
    private int green;
    private int blue;
    
    public static final int MAX_VALUE=255;
    public static final int MIN_VALUE=0;
    private static int counter=0;
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Comportament: Mètodes">
    
    //<editor-fold defaultstate="collapsed" desc="getters/setters">
    public int getRed() {
        return red;
    }

    public void setRed(int red) {
        if (red < MIN_VALUE || red > MAX_VALUE){
            throw new IllegalArgumentException(
                    String.format("Valor %d no vàlido para la coordenada R", red));
        }
        this.red = red;
    }

    public int getGreen() {
        return green;
    }

    public void setGreen(int green) {
        if (green < MIN_VALUE || green > MAX_VALUE){
            throw new IllegalArgumentException(
                    String.format("Valor %d no vàlido para la coordenada G", green));
        }
        this.green = green;
    }

    public int getBlue() {
        return blue;
    }

    public void setBlue(int blue) {
        if (blue < MIN_VALUE || blue > MAX_VALUE){
            throw new IllegalArgumentException(
                    String.format("Valor %d no vàlido para la coordenada B", blue));
        }
        this.blue = blue;
    }
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="constructors">
    public Color(int red, int green, int blue) {
        counter++;
        this.setRed(red);
        this.setGreen(green);
        this.setBlue(blue);
    }    
    
    public Color(){
        this(MIN_VALUE, MIN_VALUE, MIN_VALUE);
    }
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="mètodes d'objecte">
    public String toRGBString(boolean upper){
        return String.format(upper ? "RGB(%d, %d, %d)" : "rgb(%d, %d, %d)", 
                    getRed(), getGreen(), getBlue());
    }
  
    public String toRGBString(){
        return toRGBString(false);
    }
    
    public String toHexString(boolean upper){
        return String.format(upper ? "#%02X%02X%02X" : "#%02x%02x%02x", 
                    getRed(), getGreen(), getBlue());
    }
    
    public String toHexString(){
        return toHexString(true);
    }
    
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="mètodes estàtics">
    public static int getCounter(){
        return counter;
    }
        
    public static Color fromHexString(String color){
        if (color == null  || color.isEmpty() || color.contains(" ")){
            throw new NullPointerException("Es obligatori indicar una "
                    + "cadena de text");
        }
 
        if (!color.matches("^#[0-9A-Fa-f]{6}$")){
            throw new IllegalArgumentException(
                    String.format("El text %s no te format hexadecimal", color));
        }
        
       return new Color(Integer.parseInt(color.substring(1,3), 16),
                        Integer.parseInt(color.substring(3,5), 16),
                        Integer.parseInt(color.substring(5,7), 16));
    }
    
    public static Color getRandom(){
        Random rnd = new Random();
        return new Color(rnd.nextInt(MAX_VALUE+1), 
                rnd.nextInt(MAX_VALUE+1), rnd.nextInt(MAX_VALUE+1));
    }

    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="mètodes sobreescrits">
    
    @Override
    public boolean equals(Object obj) {
        if (obj == null)
            return false;
        //si es una referència la mateix objecte
        if (obj == this) 
            return true;
        // comprobem si l'argument és un objete de la nostra classe.
        if (!(obj instanceof Color)) 
            return false;
        Color c = (Color) obj;
        return !(red != c.red || green != c.green || blue!= c.blue);
    }
    
    @Override
    public int hashCode() {
        int result = 17;
        result = 31 * result + green + 2 * blue + 3 * red;
        return result;    
    }

    @Override
    public String toString() {
        return String.format("Color:%n-------%n"
                            + "%s%n%s%n" , toHexString(),toRGBString());
    }
 
    //</editor-fold>
    
    //</editor-fold>

    
}
