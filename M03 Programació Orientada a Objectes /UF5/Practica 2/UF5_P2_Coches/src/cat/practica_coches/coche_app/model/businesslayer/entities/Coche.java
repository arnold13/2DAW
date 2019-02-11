/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.practica_coches.coche_app.model.businesslayer.entities;

import java.util.List;
import java.util.Objects;
import java.util.Scanner;

/**
 *
 * @author Arnold
 */

    /*
    
      Crea un nou projecte i en ell crea una classe cotxe 
      amb els atributs 
    
       marca de tipus string, 
       model de tipus string i
       preu de tipus double 
    
       amb tots els seus mètodes habituals. 
    
    
    
    
      Sobreescriu els mètodes equals i hascode tenint en compte 
      que per nosaltres 
    
      dos cotxes son iguals si tenen el mateix valor a marca i model.
   
      Afegeix totes les excepcions possibles i fes el seu control. 
       Al programa driver (main) fes:
    
    */
    


public class Coche implements Comparable<Coche>{
 
    private String marca,model;
    private double preu;

//<editor-fold defaultstate="collapsed" desc="Constructores">
        public Coche(String marca, String model, double preu) {
        this.setMarca(marca);
        this.setModel(model);
        this.setPreu(preu);
    }
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="Getters y setters">
            public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getPreu() {
        return preu;
    }

    public void setPreu(double preu) {
        this.preu = preu;
    }
    
        
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="Hashcode y equals (marca y model)">
    
        @Override
    public int hashCode() {
        int hash = 3;
        hash = 43 * hash + Objects.hashCode(this.marca);
        hash = 43 * hash + Objects.hashCode(this.model);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Coche other = (Coche) obj;

        
        if(!Objects.equals(this.model, other.model)){
                
            return false;
       
        }
       
        if(!Objects.equals(this.marca, other.marca)){
            
                 return false;
            
        }
        
        

        
        return true;
    }
    
//</editor-fold>

    @Override
    public int compareTo(Coche o) {
        
        return this.getMarca().compareTo(o.getMarca());

    }
    
    
    
    //<editor-fold defaultstate="collapsed" desc="Metodos propios">
    
    
//</editor-fold>
    
    
}
