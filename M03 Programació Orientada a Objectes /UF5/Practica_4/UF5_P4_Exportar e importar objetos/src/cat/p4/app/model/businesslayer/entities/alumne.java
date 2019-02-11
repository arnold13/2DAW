/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.p4.app.model.businesslayer.entities;

import java.io.Serializable;
import java.util.ArrayList;

/**
 *
 * @author Arnold
 */
public class alumne implements Serializable{

      
    //<editor-fold defaultstate="collapsed" desc="Variables">
    
      private String nom,primerCognom,segonCognom,dni;

      private ArrayList<Integer> telefonos = new ArrayList<>();
      
    
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Constructores">
    
        public alumne(String nom, String primerCognom, String segonCognom, String dni,ArrayList telefonos) {
        setNom(nom);
        setPrimerCognom(primerCognom);
        setSegonCognom(segonCognom);
        setDni(dni);
        setTelefonos(telefonos);
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

    public ArrayList<Integer> getTelefono() {
        return telefonos;
    }
    
     public void setTelefonos(ArrayList<Integer> telefono) {
        this.telefonos = telefono;
    }
    
    
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Sobreescritura">
    
        @Override
    public String toString() {
        
   
          
        
        
        return "alumne{" + "nom=" + nom + ", primerCognom=" + primerCognom + ", segonCognom=" + segonCognom + ", dni=" + dni + ", "
                + "telefonos = \n"+
              Obtener_telefonos_String()
                         + "}";

    }
    
    
 
    
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Metodos propios">
    
    public String Obtener_telefonos_String(){
        
             String telefonos_alumno = "";
        
          for(int i = 1;i < getTelefono().size()+1 ; i++){

              telefonos_alumno += "telefono #"+i+" : "+getTelefono().get(i-1).toString() +"\n";
              
                }  
        
        return telefonos_alumno;
    }
    
//</editor-fold>
    
//</editor-fold>

 
  

  
    
}
