import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';

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
            titulo: "Fibromialgia pode isentar carência para benefícios por incapacidade do INSS"
        },
        {
            data: "20/08/2020",
            link: "https://jornal.usp.br/ciencias/ciencias-da-saude/qual-o-impacto-da-atividade-fisica-na-melhora-de-vida-de-pacientes-com-fibromialgia/",
            texto: "Um artigo publicado na revista Medicina (Ribeirão Preto. Online) avalia a prática de atividade física, os sintomas de depressão e a qualidade de vida em pacientes com fibromialgia. A doença é sentida em várias partes do corpo e tem difícil diagnóstico. Provoca uma dor “músculo-esquelética”, além de outros sintomas como depressão, cansaço e insônia, e atinge cerca de 2,5% da população brasileira. Trata-se de uma síndrome complexa e a maioria dos pacientes também relata rigidez muscular e dor após esforço físico, sendo considerada a segunda doença reumática mais comum, depois da osteoartrite. Muitos pacientes fazem uso exclusivo de terapia medicamentosa, sendo necessário um tratamento que abarque várias frentes. Foram avaliados 50 pacientes adultos com diagnóstico da doença (49 mulheres e apenas um homem), idade média de 47 anos, brancos, casados e com filhos. A pesquisa mostrou que, apesar de observada uma correlação entre pior qualidade de vida, intensidade da dor e sintomas de depressão, a melhora desses sintomas típicos da fibromialgia é atribuída às atividades físicas. Entretanto, não foi contabilizada a quantidade da atividade praticada, se pouca ou muita, para que ocorra uma melhora importante. Os autores salientam que para compreender o conceito de atividade física e exercício físico são necessários estudos mais aprofundados, pois a “prática do exercício físico influencia várias vias relacionadas às áreas de modulação da dor”. Estudos prévios demonstraram que a prática de exercício físico aeróbico contribui no controle da dor, fadiga, depressão e qualidade de vida dos pacientes com fibromialgia.",
            titulo: "Qual o impacto da atividade física em pacientes com fibromialgia?"
        },
        {
            data: "21/08/2020",
            link: "https://globoesporte.globo.com/eu-atleta/saude/noticia/um-passo-de-cada-vez-ortopedista-lista-exercicios-para-quem-tem-fibromialgia.ghtml",
            texto: "Etapa 1 - Saiba que pode ajudar: O exercício é um dos tratamentos mais eficazes para a fibromialgia. Combate todos os sintomas da doença, incluindo dor, fadiga e problemas de sono. A atividade física pode ajudar a manter a massa óssea, melhorar o equilíbrio, reduzir o estresse e aumentar a força. Fazer exercícios regulares também auxilia no controle de peso, o que é importante para reduzir a dor da fibromialgia. ",
            titulo: "Um passo de cada vez: ortopedista lista exercícios para quem tem fibromialgia"
        },
        {
        
            data: "22/08/2020",
            link: "https://anatange.jusbrasil.com.br/artigos/155146049/portador-de-fibromialgia-e-seus-direitos-previdenciarios",
            texto: "O portador de Fibromialgia que estiver afastado do trabalho por mais de 15 (quinze) dias, poderá requerer diretamente ao INSS o benefício de auxílio-doença, conforme os artigos 59 ao 64 da Lei nº 8.123/1991. Tal benefício previdenciário somente será concedido e implantado, caso o médico perito desta Autarquia Previdenciária detecte a incapacidade total e temporária deste para o trabalho, bem como suas atividades habituais. Não terá direito ao benefício caso o trabalhador comece a recolher o INSS já possuindo a doença, somente terá direito se a enfermidade agravar depois que este tiver cumprido a carência, da qual falaremos adiante. Mesmo se o trabalhador, portador de fibromialgia for autônomo poderá requerer tal benefício, desde que este contribua para com o INSS. Caso seja detectado a incapacidade total e permanente do portador da doença em questão para o trabalho e suas atividade habituais, deverá ser concedida a aposentadoria por invalidez, conforme artigos 42 e 62 da Lei nº 8.213/1991.",
            titulo: "Portador de fibromialgia e seus direitos previdenciários"
        }
    ]
   

    constructor(
        private toasterService: ToasterService,
        private router: Router,
    ) { }


    ngOnInit() {

    }

    redirecionar(link) {

        window.open(link, '_blank');
        
    }
}
