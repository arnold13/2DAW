/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.geoapp.model.businesslayer.entities;

/**
 *
 * @author soraccari
 */
public class Domicili {
    
    //<editor-fold defaultstate="collapsed" desc="Variables">
    
   public String carrer;
   
   public String numero;
   
   public String pis;
   
   public String codipostal;
   
   public String poblacio;
   
   public String provincia;
      
    
    
//</editor-fold>
    
    
    //<editor-fold defaultstate="collapsed" desc="Constructores">
    
       public Domicili(String carrer, String numero, String pis, String codipostal, String poblacio, String provincia) {
        this.setCarrer(carrer);
        this.setNumero(numero);
        this.setPis(pis);
        this.setCodipostal(codipostal);
        this.setPoblacio(poblacio);
        this.setProvincia(provincia);
    }

    public Domicili() {
        this.setCarrer("Vacio");
        this.setNumero("Vacio");
        this.setPis("Vacio");
        this.setCodipostal("Vacio");
        this.setPoblacio("Vacio");
        this.setProvincia("Vacio");
    }
       
       

//</editor-fold>
       
    //<editor-fold defaultstate="collapsed" desc="Getters y setters">
    public String getCarrer() {
        return carrer;
    }

    public String setCarrer(String carrer) {
        this.carrer = carrer;
        return carrer;
    }

    public String getNumero() {
        return numero;
    }

    public String setNumero(String numero) {
        this.numero = numero;
        return numero;
    }

    public String getPis() {
        return pis;
        
    }

    public String setPis(String pis) {
        this.pis = pis;
        return pis;
    }

    public String getCodipostal() {
        return codipostal;
    }

    public String setCodipostal(String codipostal) {
        this.codipostal = codipostal;
        return codipostal;
    }

    public String getPoblacio() {
        return poblacio;
    }

    public String setPoblacio(String poblacio) {
        this.poblacio = poblacio;
        return poblacio;
    }

    public String getProvincia() {
        return provincia;
    }

    public String setProvincia(String provincia) {
        this.provincia = provincia;
        
        return provincia;
    }
   
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Metodos">
    
    //<editor-fold defaultstate="collapsed" desc="Metodos de la classe">
    
    public String direccion_amigable(){
        
        return getCarrer()+" "+getNumero()+", "+getPis()+", "+getCodipostal()+", "+getPoblacio()+" ("+getProvincia()+")";
        
        
    }
    
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Metodos sobrecargados">
    
    @Override
    public String toString() {
        return "Domicili{" + "carrer=" + carrer + ", numero=" + numero + ", pis=" + pis + ", codipostal=" + codipostal + ", poblacio=" + poblacio + ", provincia=" + provincia + '}';
    }
    
//</editor-fold>
    
    
//</editor-fold>

    


    
}
