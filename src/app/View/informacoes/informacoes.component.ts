import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Component({
    selector: 'app-informacoes',
    templateUrl: './informacoes.component.html',
    styleUrls: ['./informacoes.component.css'],
    providers: []
})
export class InformacoesComponent implements OnInit {
   
    informacoesTotal = [
        {
            data: "19/08/2020",
            link: "https://www.jornalcontabil.com.br/fibromialgia-pode-isentar-carencia-para-beneficios-por-incapacidade-do-inss/",
            texto: "Trabalhadores com FIBROMIALGIA poderão ser dispensados dos prazos de carência para acesso ao auxílio-doença e à Aposentadoria por Invalidez. O benefício está previsto no Projeto de Lei 4.399/2019, aprovado pela Comissão de Assuntos Sociais (CAS) nesta quarta-feira (9). O texto recebeu voto favorável do relator, senador Irajá (PSD-TO). Agora, a matéria será avaliada pelo Plenário da casa. A FIBROMIALGIA é uma doença silenciosa e não detectável em exames laboratoriais que causa geralmente dor muscular generalizada e sensibilidades. Muitas vezes é encarada como um transtorno apenas psicológico mesmo quando as dores constantes gerem até depressão no doente. O quadro é ainda pior quando o doente sofre com a descrença e desconfiança de quem está ao seu redor, ou que duvidam da veracidade de sua condição.",
            titulo: "Fibromialgia pode isentar carência para benefícios por incapacidade do INSS",
            tag: 'Trabalhistas'
        },
        {
            data: "20/08/2020",
            link: "https://jornal.usp.br/ciencias/ciencias-da-saude/qual-o-impacto-da-atividade-fisica-na-melhora-de-vida-de-pacientes-com-fibromialgia/",
            texto: "Um artigo publicado na revista Medicina (Ribeirão Preto. Online) avalia a prática de atividade física, os sintomas de depressão e a qualidade de vida em pacientes com fibromialgia. A doença é sentida em várias partes do corpo e tem difícil diagnóstico. Provoca uma dor “músculo-esquelética”, além de outros sintomas como depressão, cansaço e insônia, e atinge cerca de 2,5% da população brasileira. Trata-se de uma síndrome complexa e a maioria dos pacientes também relata rigidez muscular e dor após esforço físico, sendo considerada a segunda doença reumática mais comum, depois da osteoartrite. Muitos pacientes fazem uso exclusivo de terapia medicamentosa, sendo necessário um tratamento que abarque várias frentes. Foram avaliados 50 pacientes adultos com diagnóstico da doença (49 mulheres e apenas um homem), idade média de 47 anos, brancos, casados e com filhos. A pesquisa mostrou que, apesar de observada uma correlação entre pior qualidade de vida, intensidade da dor e sintomas de depressão, a melhora desses sintomas típicos da fibromialgia é atribuída às atividades físicas. Entretanto, não foi contabilizada a quantidade da atividade praticada, se pouca ou muita, para que ocorra uma melhora importante. Os autores salientam que para compreender o conceito de atividade física e exercício físico são necessários estudos mais aprofundados, pois a “prática do exercício físico influencia várias vias relacionadas às áreas de modulação da dor”. Estudos prévios demonstraram que a prática de exercício físico aeróbico contribui no controle da dor, fadiga, depressão e qualidade de vida dos pacientes com fibromialgia.",
            titulo: "Qual o impacto da atividade física em pacientes com fibromialgia?",
            tag: 'Atividades Físicas'
        },
        {
            data: "21/08/2020",
            link: "https://globoesporte.globo.com/eu-atleta/saude/noticia/um-passo-de-cada-vez-ortopedista-lista-exercicios-para-quem-tem-fibromialgia.ghtml",
            texto: "Etapa 1 - Saiba que pode ajudar: O exercício é um dos tratamentos mais eficazes para a fibromialgia. Combate todos os sintomas da doença, incluindo dor, fadiga e problemas de sono. A atividade física pode ajudar a manter a massa óssea, melhorar o equilíbrio, reduzir o estresse e aumentar a força. Fazer exercícios regulares também auxilia no controle de peso, o que é importante para reduzir a dor da fibromialgia. ",
            titulo: "Um passo de cada vez: ortopedista lista exercícios para quem tem fibromialgia",
            tag: 'Atividades Físicas'
        },
        {
            data: "06/09/2020",
            link: "https://blogpilates.com.br/tratamento-da-fibromialgia-aliviam-dor/",
            texto: "Etapa 1 - Saiba que pode ajudar: O exercício é um dos tratamentos mais eficazes para a fibromialgia. Combate todos os sintomas da doença, incluindo dor, fadiga e problemas de sono. A atividade física pode ajudar a manter a massa óssea, melhorar o equilíbrio, reduzir o estresse e aumentar a força. Fazer exercícios regulares também auxilia no controle de peso, o que é importante para reduzir a dor da fibromialgia. ",
            titulo: "Exercícios para Combaterem a Dor",
            tag: 'Atividades Físicas'
        },
        {
        
            data: "22/08/2020",
            link: "https://anatange.jusbrasil.com.br/artigos/155146049/portador-de-fibromialgia-e-seus-direitos-previdenciarios",
            texto: "Atualmente a Fibromialgia é uma das doenças reumatológicas mais frequentes, caracterizada por dor muscular generalizada no corpo acompanhada de sintomas de fadiga, alterações de sono, memória e humor..",
            titulo: "Portador de fibromialgia e seus direitos previdenciários",
            tag: 'Trabalhistas'
        },

        {
        
            data: "06/08/2020",
            link: "https://www.vittude.com/blog/fibromialgia-sintomas-depressao/",
            texto: "O principal sintoma da síndrome é a dor generalizada. Essa dor é normalmente descrita como uma dor de cansaço constante. Nem forte nem aguda, acontecendo em todo o corpo, com duração de pelo menos três meses.",
            titulo: "Fibromialgia: sintomas e sua relação com a depressão",
            tag: 'Sintomas'
        }
    ]

   public todas = this.informacoesTotal;
   

    constructor(
        private toasterService: ToasterService,
        private router: Router,
    ) { }


    ngOnInit() {


    }

    redirecionar(link) {

        window.open(link, '_blank');
        
    }

    filterTodas() {
        this.informacoesTotal = this.todas;
    }

    filterTrabalhistas() {
        this.informacoesTotal = this.todas;
        const trabalhistas = this.informacoesTotal.filter((resp) => {
          return resp.tag === 'Trabalhistas';
        })

       this.informacoesTotal = trabalhistas;
    }

    filterAtividadesFisicas() {
        this.informacoesTotal = this.todas;
        const atividades = this.informacoesTotal.filter((resp) => {
          return resp.tag === 'Atividades Físicas';
        })

       this.informacoesTotal = atividades;
    }

    filterSintomas() {
        this.informacoesTotal = this.todas;
        const sintomas = this.informacoesTotal.filter((resp) => {
          return resp.tag === 'Sintomas';
        })

       this.informacoesTotal = sintomas;
    }
}
