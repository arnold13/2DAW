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
public class Modulos {
    
    //<editor-fold defaultstate="collapsed" desc="Variables">
    
    public String nom;
    
    public String descripció;
    
    public int Durada;
    
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Constructor">
    
       public Modulos(String nom, String descripció, int Durada) {
        this.setNom(nom);
        this.setDescripció(descripció);
        this.setDurada(Durada);
    }
    
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Getters y setters">
    
       
    public String getNom() {
        return nom;
    }

    public String setNom(String nom) {
        this.nom = nom;
        return nom;
    }

    public String getDescripció() {
        return descripció;
    }

    public String setDescripció(String descripció) {
        this.descripció = descripció;
        return descripció;
    }

    public int getDurada() {
        return Durada;
    }

    public int setDurada(int Durada) {
        this.Durada = Durada;
        return Durada;
    }

       
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Metodos">
    
//</editor-fold>

 
    

    
}
