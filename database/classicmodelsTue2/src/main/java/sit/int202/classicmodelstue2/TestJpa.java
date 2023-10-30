package sit.int202.classicmodelstue2;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import sit.int202.classicmodels.entities.Employee;
import sit.int202.classicmodelstue2.entities.Office;

import java.util.Scanner;

public class TestJpa {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("default");
        EntityManager em = emf.createEntityManager();
        Office office = em.find(Office.class,"8");
        if(office != null) {
            System.out.println(office);
        } else {
            System.out.println("New office added\n");
            Office newOffice = new Office();
            newOffice.setOfficeCode("8");
            newOffice.setCountry("Thailand");
            newOffice.setCity("Bangkok");
            newOffice.setAddressLine1("126 Pracha-Utit");
            newOffice.setPhone("123456789");
            newOffice.setPostalCode("10140");
            newOffice.setTerritory("XX");
            em.getTransaction().begin();
            em.persist(newOffice);
            em.getTransaction().commit();
            System.out.println(newOffice);
        }
        System.out.print("Enter office code you want to delete: ");
        String x = new Scanner(System.in).next();
        Office delOffice = em.find(Office.class,x);
        if(delOffice != null){
            em.getTransaction().begin();
            em.remove(delOffice);
            em.getTransaction().commit();
        }
        Employee employee = em.find(Employee.class, 1002);
        System.out.println(employee);
        em.close();
        emf.close();
    }
}
