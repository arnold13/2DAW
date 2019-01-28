/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cat.iesjoaquimmir.institut;

import cat.iesjoaquimmir.institut.Exception.Error_mayor_edad;
import cat.iesjoaquimmir.institut.Exception.Max_Moduls;
import cat.iesjoaquimmir.institut.Exception.Max_telefon;
import java.util.ArrayList;


public class Alumne {
    
    //<editor-fold defaultstate="collapsed" desc="atributs">
    
    /**
     * Marca la edat a la que es considera una persona major d'edat
     */
    public static final int MAJOR_EDAT = 18;


    private String nom;
    private String primerCognom;
    private String segonCognom;
    private String dni;
    private ArrayList<String> telefons;
    private ArrayList<Modul> moduls;
    private int edat;
    private Domicili domicili;


    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="mètodes">

    
    //<editor-fold defaultstate="collapsed" desc="constructor">
    public Alumne(String nom, String primerCognom, String segonCognom, String dni, int edat, Domicili domicili) {
        setNom(nom);
        setPrimerCognom(primerCognom); 
        setSegonCognom(segonCognom);
        setDni(dni);
        setEdat(edat);
        setDomicili(domicili);
    }
    
    //</editor-fold>
     
    //<editor-fold defaultstate="collapsed" desc="setters/getters">
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
     * @return the primerCognom
     */
    public String getPrimerCognom() {
        return primerCognom;
    }

    /**
     * @param primerCognom the primerCognom to set
     */
    public void setPrimerCognom(String primerCognom) {
        this.primerCognom = primerCognom;
    }

    /**
     * @return the segonCognom
     */
    public String getSegonCognom() {
        return segonCognom;
    }

    /**
     * @param segonCognom the segonCognom to set
     */
    public void setSegonCognom(String segonCognom) {
        this.segonCognom = segonCognom;
    }

    /**
     * @return the dni
     */
    public String getDni() {
        return dni;
    }

    /**
     * @param dni the dni to set
     */
    public void setDni(String dni) {
        
        if(dni.isEmpty()){
            
         throw new IllegalArgumentException("El DNI es un dato obligatorio");
   
        }else if(dni.length() != 9 ){
            
         throw new ArithmeticException("El DNI no cumple con la longitud suficiente");
   
        }
        
        
        
    }

    /**
     * @return the telefons
     */
    public ArrayList<String> getTelefons() {
        return telefons;
    }

    /**
     * @param telefons the telefons to set
     */
    public void setTelefons(ArrayList<String> telefons) {
        
        for(int i = 0; i < telefons.size();i++){
            
            if(telefons.get(i).length() != 9){
            
                throw new NumberFormatException("El numero :" + telefons.get(i) + " no cumple con la longitud establecida");
                
                } else {
                
                this.telefons = telefons;

            }
            
        }
        
        
    }

    /**
     * @return the moduls
     */
    public ArrayList<Modul> getModuls() {
        return moduls;
    }

    /**
     * @param moduls the moduls to set
     */
    public void setModuls(ArrayList<Modul> moduls) {
        
        if(moduls.size() > 13 || moduls.size() < 1){
            
            throw new ArithmeticException("El numero de modulos que debe tener el usuario no son los correctos");

            
        }else{
            
           this.moduls = moduls;

            
        }

    }

    /**
     * @return the edat
     */
    public int getEdat() {
        return edat;
    }

    /**
     * @param edat the edat to set
     */
    public void setEdat(int edat) {
           this.edat = edat;
       
    }

    /**
     * @return the domicili
     */
    public Domicili getDomicili() {
        return domicili;
    }

    /**
     * @param domicili the domicili to set
     */
    public void setDomicili(Domicili domicili) {
        this.domicili = domicili;
    }
    
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="mètodes d'objecte">
    public String getNomComplert() {
		return getPrimerCognom() + " " 
                        + getSegonCognom() + ", " + getNom() ;
    }
    
    public boolean isMajorEdat() {
		return getEdat() >= MAJOR_EDAT;
    }
    
    public void setTelefon_to_Array(String telefono){
        
        
        if(getTelefons().size() >= 5){
            
            throw new Max_telefon("El alumno no puede tener mas de 5 numeros");
            
        }else{
            
            getTelefons().add(telefono);
            
        }
        
        
        
    }
    
    public void setModul_to_Array(Modul modul) throws Max_Moduls{
        
        System.err.println(getModuls().size());

          if(getModuls().size() >= 5){
            
            throw new Max_Moduls("El alumno no puede tener mas de 5 modulos");
            
        }else{
            getModuls().add(modul);
        }
        
    
    }
    
    
    
    //</editor-fold>
   
    //</editor-fold>
}