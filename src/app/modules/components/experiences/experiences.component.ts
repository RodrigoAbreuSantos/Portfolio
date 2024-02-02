import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'FEBRACE',
        p: 'JUN 2020 - NOV 2020',
      },
      text: '<p>Em 2020 no primeiro ano do ensino medio e tecnico, eu e minha equipe fizemos um prototipo de um sistema para canis, que nele voce poderia adotar ou achar seu cachorro/gato no canil da sua região</p>',
    },
    {
      summary: {
        strong: 'TCC',
        p: 'FEV 2022 - NOV 2022 ',
      },
      text: '<p>Ultimo ano do ensino medio e tecnico, e eu e minha dupla fizemos um sistema sobre criptmoedas, alem disso fizemos o relatorio</p>',
    },
    {
      summary: {
        strong: 'Projeto Integrador I',
        p: 'FEV 2023 - JUN 2023',
      },
      text: '<p>Eu e minha equipe fizemos um sistema em Python que de acorodo com as informações dadas a ele ele informava a qualidade do ar. usamos MYSQL para a integração com o Python</p>',
    },
    {
      summary: {
        strong: 'Projeto Integrador II',
        p: 'AGO 2023 - NOV 2023',
      },
      text: '<p>Não podia usar framework nesse projeto, então fiz um sistema com HTML/CSS e node puro, usando o padrão MVC. O sistema era para uma barbearia, o banco de dados foi no MYSQL WORKBENCH e o tipo foi sequelize</p>',
    },
    {
      summary: {
        strong: 'Portfolio',
        p: 'JAN 2024',
      },
      text: '<p>Com meu conhecimento em Angular fiz esse portfolio, usando Angular na versão 17</p>',
    },
  ]);
}
