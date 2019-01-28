/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.institut;

public class Domicili {
    
    //<editor-fold defaultstate="collapsed" desc="atributs">

    private String via;
    private String numero;
    private String pis;
    private String codiPostal;
    private String poblacio;
    private String provincia;
    
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="mètodes">
    
    //<editor-fold defaultstate="collapsed" desc="constructors">
    public Domicili(String via, String numero, String pis, String codiPostal, String poblacio, String provincia) {
        setVia(via); 
        setNumero(numero);
        setPis(pis);
        setCodiPostal(codiPostal);
        setPoblacio(poblacio);
        setProvincia(provincia);
    }
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="getters/setters">
        /**
     * @return the via
     */
    public String getVia() {
        return via;
    }

    /**
     * @param via the via to set
     */
    public void setVia(String via) {
        this.via = via;
    }

    /**
     * @return the numero
     */
    public String getNumero() {
        return numero;
    }

    /**
     * @param numero the numero to set
     */
    public void setNumero(String numero) {
        
        if(Integer.parseInt(numero) > 0){
            
              this.numero = numero;

        }else{
            
            throw new ArithmeticException("El numero de domicilio esta por debajo de 0");

        }
        
    }

    /**
     * @return the pis
     */
    public String getPis() {
        return pis;
    }

    /**
     * @param pis the pis to set
     */
    public void setPis(String pis) {
        this.pis = pis;
    }

    /**
     * @return the codiPostal
     */
    public String getCodiPostal() {
        return codiPostal;
    }

    /**
     * @param codiPostal the codiPostal to set
     */
    public void setCodiPostal(String codiPostal) {
        this.codiPostal = codiPostal;
    }

    /**
     * @return the poblacio
     */
    public String getPoblacio() {
        return poblacio;
    }

    /**
     * @param poblacio the poblacio to set
     */
    public void setPoblacio(String poblacio) {
        this.poblacio = poblacio;
    }

    /**
     * @return the provincia
     */
    public String getProvincia() {
        return provincia;
    }

    /**
     * @param provincia the provincia to set
     */
    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }    
    
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="mètodes d'objecte">
    public String getDomiciliAmigable() {
		return via + " " + numero + ", " 
				+ pis + ", " + codiPostal + ", " 
				+ poblacio + " (" + provincia + ")";
    }
    //</editor-fold>
    
    //</editor-fold>

    
}