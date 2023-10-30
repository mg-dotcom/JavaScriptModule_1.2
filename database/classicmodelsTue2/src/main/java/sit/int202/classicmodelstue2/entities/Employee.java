package sit.int202.classicmodels.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="employees")
@Getter
@Setter
@ToString(exclude = {""})
@NamedQueries({
        @NamedQuery(name="EMPLOYEE.FIND_ALL",query = "select e from Employee e"),
        @NamedQuery(name="EMPLOYEE.FIND_NAME",
                query = "select e from Employee e where e.firstName like :first_name OR e.lastName like :last_name")
})
public class Employee {
    @Id
    @Column(name = "employeeNumber")
    private int  employeeNumber;
    private String lastName;
    private String firstName;
    private String extension;
    private String email;
    private String officeCode;
    private Integer reportsTo;
    private String jobTitle;

}

