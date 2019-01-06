/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.geoapp.model.businesslayer.entities;

/**
 *
 * @author alumne
 */
public class AlphaColor extends Color {
    
    //<editor-fold defaultstate="collapsed" desc="Atributs">
    private double alpha;
    
    public static final double MIN_VALUE_ALPHA = 0.0;
    public static final double MAX_VALUE_ALPHA = 1.0;
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Mètodes">
    
    //<editor-fold defaultstate="collapsed" desc="Constructor">
    public AlphaColor(int red, int green, int blue, double alpha){
            super(red, green, blue);
            this.setAlpha(alpha);
    }
    
    public AlphaColor(int red, int green, int blue){
            this(red, green, blue, MIN_VALUE_ALPHA);
    }
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="getters/setters">
    /**
     * @return the alpha
     */
    public double getAlpha() {
        return alpha;
    }

    /**
     * @param alpha the alpha to set
     */
    public void setAlpha(double alpha) {
        if (alpha < MIN_VALUE_ALPHA || alpha > MAX_VALUE_ALPHA ){
            throw new IllegalArgumentException(
                    String.format("Valor %f no vàlido.", alpha));
        }
        this.alpha = alpha;
    }
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Sobreescritura">
    
    @Override
    public String toHexString(boolean upper) {
        return String.format("%s i Alpha: %.2f", super.toHexString(upper), getAlpha()); 
    }

    @Override
    public String toHexString() {
        return toHexString(true); 
    }

    @Override
    public String toRGBString(boolean upper) {
        return String.format("%s i Alpha: %.2f", super.toRGBString(upper), getAlpha()); 
    }

    @Override
    public String toRGBString() {
        return toRGBString(false); 
    }
    
    //</editor-fold>
    
    //</editor-fold>


    
    
    
}
