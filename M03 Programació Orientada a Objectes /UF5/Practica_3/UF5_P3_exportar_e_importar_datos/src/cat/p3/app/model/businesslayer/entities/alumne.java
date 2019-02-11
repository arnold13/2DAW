/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.p3.app.model.businesslayer.entities;

/**
 *
 * @author Arnold
 */
public class alumne {
        
    
    //<editor-fold defaultstate="collapsed" desc="Variables">
    
      private String nom,primerCognom,segonCognom,dni;

    
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Constructores">
    
        public alumne(String nom, String primerCognom, String segonCognom, String dni) {
        setNom(nom);
        setPrimerCognom(primerCognom);
        setSegonCognom(segonCognom);
        setDni(dni);
    }
    
//</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Metodos">
    
  
    //<editor-fold defaultstate="collapsed" desc="Getters y setters">
    
        public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrimerCognom() {
        return primerCognom;
    }

    public void setPrimerCognom(String primerCognom) {
        this.primerCognom = primerCognom;
    }

    public String getSegonCognom() {
        return segonCognom;
    }

    public void setSegonCognom(String segonCognom) {
        this.segonCognom = segonCognom;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }
    
    
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Sobreescritura">
    
    
      @Override
    public String toString() {
        return "alumne{" + "nom=" + nom + ", primerCognom=" + primerCognom + ", segonCognom=" + segonCognom + ", dni=" + dni + '}';
    }
    
    
//</editor-fold>
    
    
//</editor-fold>

  
    
    
}
