package sit.int202.classicmodelstue2;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import sit.int202.classicmodels.entities.Employee;
import sit.int202.classicmodelstue2.entities.Office;

import java.util.List;
import java.util.Scanner;

public class TestEntitiesRelationships {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("default");
        EntityManager em = emf.createEntityManager();
        Scanner sc =new Scanner(System.in);
        List<Office> officeList = em.createNamedQuery("OFFICE.FIND_ALL").getResultList();
        for(Office office :officeList) {
            displayOfficeEmployee(office);
        }
        do {
            System.out.print("Enter office code (0 to stop): ");
            String officeCode = sc.next();
            if(officeCode.equalsIgnoreCase("0")) {
                break;
            }
            Office office = em.find(Office.class, officeCode);
            if (office == null) {
                System.out.println("Office code "+ officeCode + " does not exist !!");
            } else {
                displayOfficeEmployee(office);
            }
        } while (true);
    }

    private static void displayOfficeEmployee(Office office) {
        System.out.println(office.getOfficeCode()+ " "+ office.getCity() + ", "+
                office.getCountry());
        System.out.println("---------------------------------------------");
        for(Employee employee : office.getEmployeeList()) {
            System.out.printf("%8d %-10s %-12s %-15s\n",
                    employee.getEmployeeNumber(), employee.getFirstName(),
                    employee.getLastName(), employee.getJobTitle());
        }
        System.out.println();
    }
}
