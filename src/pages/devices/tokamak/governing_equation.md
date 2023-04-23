## Governing Equation

- $\vec{B}$ is the magnetic field
- $\vec{v}$ is the plasma velocity
- $\eta$ is the plasma resistivity
- $\rho$ is the plasma density
- $p$ is the plasma pressure
- $\mu_0$ is the permeability of free space
- $\vec{J}$ is the plasma current density
- $\vec{g}$ is the gravitational acceleration vector

$$
\frac{\partial \vec{B}}{\partial t} = \nabla \times (\vec{v} \times \vec{B} - \eta \nabla \times \vec{B})
$$

$$
\rho \frac{\partial \vec{v}}{\partial t} = - \nabla p + \frac{1}{\mu_0} (\nabla \times \vec{B}) \times \vec{B} + \vec{J} \times \vec{B} + \rho \vec{g} 
$$

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0
$$

