/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.geoapp.model.businesslayer.entities;

import java.util.ArrayList;

/**
 *
 * @author soraccari
 */
public class Alumne {
    
    //<editor-fold defaultstate="collapsed" desc="Variables">
    
    public String nom;
    
    public String primercognom;
            
    public String segon_cognom;      
    
    public String DNI;
    
    public ArrayList<String> telèfon;
    
    public ArrayList<Modulos> moduls;
    
    public int edat;
    
    public Domicili domicili;

    

   

    
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Constructores">

    public Alumne(String nom, String primercognom, String segon_cognom, String DNI, int edat, Domicili domicili , ArrayList<String> telèfon , ArrayList<Modulos> moduls) {
        this.setNom(nom);
        this.setPrimercognom(primercognom);
        this.setSegon_cognom(segon_cognom);
        this.setDNI(DNI);
        this.setEdat(edat);
        this.setDomicili(domicili);
        this.setTelèfon(telèfon);
        this.setModuls(moduls);
    

    }
    
    




    
    public Alumne(String nom, String primercognom, String segon_cognom, String DNI, int edat, Domicili domicili) {
        this.setNom(nom);
        this.setPrimercognom(primercognom);
        this.setSegon_cognom(segon_cognom);
        this.setDNI(DNI);
        this.setEdat(edat);
        this.setDomicili(domicili);

    }
    

    public Alumne() {
        this.setNom("Vacio");
        this.setPrimercognom("Vacio");
        this.setSegon_cognom("Vacio");
        this.setDNI("Vacio");
        this.setEdat(0);
        this.setDomicili(null);

        
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

    public String getDNI() {
        return DNI;
    }

    public String setDNI(String DNI) {
        this.DNI = DNI;
        return DNI;
    }

    public int getEdat() {
        return edat;
    }

    public int setEdat(int edat) {
        this.edat = edat;
        return edat;
    }
    
    
    public String getPrimercognom() {
        return primercognom;
    }

    public String setPrimercognom(String primercognom) {
        this.primercognom = primercognom;
        return primercognom;
    }

    public String getSegon_cognom() {
        return segon_cognom;
    }

    public String setSegon_cognom(String segon_cognom) {
        this.segon_cognom = segon_cognom;
        return segon_cognom;
    }



    public Domicili getDomicili() {
        return domicili;
    }

    public Domicili setDomicili(Domicili domicili) {
        this.domicili = domicili;
        return domicili;
    }

    public ArrayList<String> getTelèfon() {
        return telèfon;
    }

    public ArrayList setTelèfon(ArrayList<String> telèfon) {
        this.telèfon = telèfon;
        return telèfon;
    }

    public ArrayList<Modulos> getModuls() {
        return moduls;
    }

    public ArrayList setModuls(ArrayList<Modulos> moduls) {
        this.moduls = moduls;
        return moduls;
    }
    

    
//</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Metodos">
    
//<editor-fold defaultstate="collapsed" desc="Metodos de la classe">
    
      public String Nombre_completo(){
   
      return String.format("Nombre %s \n Primer Apellido: %s \n Segundo Apellido %s \n", getNom(),getPrimercognom(),getSegon_cognom());
  }
  
  public boolean isMajor_de_Edat(){
      
      return getEdat() >= 18;
  }
  
  
  public void informacion_modulos_y_telefono_alumno(){
      
// UF4C1P9b


        
       
        
        
                System.out.println("\n\n----------Modulos----------\n\n");

        
        System.out.println(String.format("El alumno %s tiene las siguientes asignaturas:", getNom()));
        
                
        for (Modulos modul : getModuls()) {  // Advertencia para usar lambda.
            
            System.out.println(String.format("Nombre_asignatura: %s \n"
                    + "Identificacion_asignatura: %s \n"
                    + "Duracion_asignatura : %s \n", modul.getNom(),modul.getDescripció(),modul.getDescripció()));
            
        }
        
        
        
        System.out.println("\n\n----------Telefonos----------\n\n");
        
        System.out.println(String.format(" \n \n El alumno %s tiene los siguientes numeros de telefono en su lista: \n \n", getNom()));      
        
       
        for (String tel : getTelèfon()) {
            
            System.out.println(String.format("Telefono : %s \n", getTelèfon()));
            
        }
        

        
        
  }
    
//</editor-fold>
  
//<editor-fold defaultstate="collapsed" desc="Metodos sobrecargados">
  
   @Override
    public String toString() {
        return "Alumne{" + "nom=" + nom + ", primercognom=" + primercognom + ", segon_cognom=" + segon_cognom + ", DNI=" + DNI + ", tel\u00e8fon=" + telèfon + ", edat=" + edat + ", domicili=" + domicili + '}';
    }
  
//</editor-fold>
    
//</editor-fold>

   

  

   

  
}
