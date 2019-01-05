package cat.iesjoaquimmir.geoapp.model.businesslayer.entities;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author soraccari
 */
public class Alumne {

   private String nom;
    
   private String dni;
    
   private int edat;
    
    public Alumne() {
       
        setNom("Anonymous");
        
        setDni("00000000A");
        
        setEdat(99);
       
    }

    public Alumne(String nom, String dni, int edat) {
        
        setNom(nom);
        
        setDni(dni);
        
        setEdat(edat);
        
        
    }
    
    public Alumne(String nom){
        
        setNom(nom);
        
        setDni("00000000A");
        
        setEdat(99);
        
    }
    
    
    public Alumne(String nom,String dni){
        
        setNom(nom);
        
        setDni(dni);
        
        setEdat(99);

        
    }
    
    public Alumne(String dni , int edat){
        
        setDni(dni);
        
        setEdat(edat);
        
        setNom("Anonymous");
        
    }
    
    
    public Alumne (int edat , String nom){
        
        setEdat(edat);
        
        setNom(nom);
        
        
    }
    
   
    
    //<editor-fold defaultstate="collapsed" desc="Getters y setters">
    
    
    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public int getEdat() {
        return edat;
    }

    public void setEdat(int edat) {
        this.edat = edat;
    }
    
//</editor-fold>

    
    //<editor-fold defaultstate="collapsed" desc="Metodos de objeto">
    
    public String Saludo(){
        
        
        
        return String.format("Hola me llamo %s y tengo %d años y me identifico con el siguiente dni: %s",getNom(),getEdat(),getDni() + "\n\n");
    }

    
//</editor-fold>
    
    
}
