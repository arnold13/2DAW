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
public class Square extends Shape  {
//<editor-fold defaultstate="collapsed" desc="Atributs">
    //fcom + tabulacion para ^
    
    private double side;
    
    public static final double SIDE_VALUE=1.0;
    
    
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="Comportament: Mètodes">
   
    //<editor-fold defaultstate="collapsed" desc="Constructores">
        
        public Square(double side, Color backgroundColor, Color foregroundColor){
            super(backgroundColor, foregroundColor);
            this.setSide(side);
            
        }
        public Square(double side){
               this(side, 
                    new Color(Color.MAX_VALUE, Color.MAX_VALUE, Color.MAX_VALUE), 
                    new Color(Color.MIN_VALUE, Color.MIN_VALUE, Color.MIN_VALUE) );
        }
        public Square(){
            this(SIDE_VALUE, 
                new AlphaColor(Color.MAX_VALUE, Color.MAX_VALUE, Color.MAX_VALUE), 
                new AlphaColor(Color.MIN_VALUE, Color.MIN_VALUE, Color.MIN_VALUE) );
        }
        
        
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="getters/setters">
        /**
         * @return the side
         */
        public double getSide() {
            return side;
        }

        /**
         * @param side the side to set
         */
        public void setSide(double side) {
            if(side <=0.0){
                throw new IllegalArgumentException(
                    String.format("Valor %f no valid.", side));
            }
            this.side = side;
        }
        
              
        
        
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Operacions d'objecte">
    public double getArea(){
        return Math.pow(getSide(), 2);
    }
    public double getPerimeter(){
        return getSide() *4;
    }
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Sobreescritura">
    @Override
    public String toString() {
        return String.format("El costat: %.2f \n L'Area: %.2f\n El perimetre: %.2f %s \n", getSide(), getArea(), getPerimeter(), super.toString() );
    }
    //</editor-fold>
//</editor-fold> 

}