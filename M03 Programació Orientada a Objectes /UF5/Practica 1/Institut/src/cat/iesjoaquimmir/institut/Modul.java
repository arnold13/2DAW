/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.institut;

import cat.iesjoaquimmir.institut.Exception.Error_Numero_Horas_Modulo;

public class Modul {
    private String nom;
    private String descripcio;
    private int hores;

    //<editor-fold defaultstate="collapsed" desc="constructors">
    
    public Modul(String nom, String descripcio, int hores) {
        setNom(nom);
        setDescripcio(descripcio);
        setHores(hores);
    }

    public Modul(String nom, int hores) {
	this(nom, null, hores);
    }

    //</editor-fold>
    //<editor-fold defaultstate="collapsed" desc="metodes setters/getters">
    /**
     * @return the nom
     */
    public String getNom() {
        return nom;
    }

    /**
     * @param nom the nom to set
     */
    public void setNom(String nom) {
        this.nom = nom;
    }

    /**
     * @return the descripcio
     */
    public String getDescripcio() {
        return descripcio;
    }

    /**
     * @param descripcio the descripcio to set
     */
    public void setDescripcio(String descripcio) {
        this.descripcio = descripcio;
    }

    /**
     * @return the hores
     */
    public int getHores() {
        return hores;
    }

    /**
     * @param hores the hores to set
     */
    public void setHores(int hores) {
        
        if(hores > 8760){
            
            throw new Error_Numero_Horas_Modulo("Las horas de un modulo no puede ser mayores que las de un año");
            
        }else if(hores <= 0){
            
            throw new Error_Numero_Horas_Modulo("Las horas de un modulo no pueden ser inferiores o iguales a 0");

            
        }else{
            
            this.hores = hores;
            
        }
        
    }
    //</editor-fold>

}