import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    infosDestaque = [
        {
            data: "17/08/2020",
            link: "https://primeirahora.com.br/producao-de-carteirinha-do-portador-de-fibromialgia-comeca-nesta-quinta-feira-em-rondonopolis/",
            texto: "A Secretaria Municipal de Saúde estará recolhendo os documentos necessários para a confecção da carteirinha do portador de fibromialgia a partir desta quinta-feira (9), incluindo Rondonópolis na lista dos municípios brasileiros que reconhecem a necessidade de atendimento preferencial às pessoas que possuem a fibromialgia - síndrome que causa dores por todo o corpo e por longos períodos. A medida visa atender a Lei Municipal nº 10.303, de 14 de junho de 2019, que dispõe sobre o atendimento preferencial às pessoas com fibromialgia nos órgãos públicos, empresas públicas, empresas concessionárias de serviços públicos e empresas privadas localizadas no município de Rondonópolis e dá outras providências.Os pacientes que quiserem obter o documento deverão comparecer na Secretaria Municipal de Saúde e apresentar os originais e cópias de laudo médico ou atestado com o CID, comprovante de residência atualizado; RG e CPF, e Cartão Nacional do SUS. O prazo para confecção da carteirinha é de 30 dias. Para mais informações, entrar em contato pelos telefones (66) 3410-0218 ou 3410-0213.",
            titulo: "Produção de carteirinha do portador de fibromialgia"
        },
        {
            data: "16/08/2020",
            link: "https://drauziovarella.uol.com.br/geriatria/reumatismos/o-que-acontece-no-corpo-do-paciente-com-fibromialgia/",
            texto: "Quase todo mundo já sentiu dor nas costas alguma vez na vida, mas o paciente com fibromialgia pode não só sentir dor nas costas, mas também nas pernas, nos ombros e em reumatológica, sem causa orgânica, inflamatória ou mecânica, em que o paciente sente dor crônica generalizada por mais de três meses. Toda dor funciona como um alarme de incêndio – ela indica que determinada região do organismo não está funcionando bem. Na fibromialgia esse alarme dispara sem necessidade e ativa todo o sistema nervoso, fazendo a pessoa sentir ainda mais dor. Dessa maneira, nervos, medula e cérebro tornam os estímulos dolorosos ainda mais intensos. Isso significa que, além das dores provocadas pela própria condição, uma dor lombar ou uma dor nos ombros, por exemplo — problema comum que pode atingir qualquer um — pode ser ainda mais intensa em quem tem fibromialgia.",
            titulo: "O que acontece no corpo do paciente com fibromialgia?"
        },
        {
            data: "14/08/2020",
            link: "https://paranashop.com.br/2020/04/fibromialgia-afeta-cerca-de-5-da-populacao-no-pais/",
            texto: "Segundo a Sociedade Brasileira de Reumatologia (SBR), a fibromialgia afeta cerca de 5% da população no Brasil. A SBR estima ainda que a cada dez pacientes, entre 7 e 9 são do sexo feminino, com idade entre 30 e 55 anos.  Anos atrás era comum que as dores dos pacientes de fibromialgia fossem consideradas psicológicas ou imaginárias. Mas, felizmente exames e pesquisas recentes apontam que as dores, efetivamente, são causadas por uma disfunção no cérebro, que resulta em uma amplificação dos impulsos dolorosos.  A fibromialgia é um distúrbio em que a pessoa sente uma dor musculoesquelética generalizada constante em ambos os lados do corpo, acima e abaixo da cintura. O paciente sente grande sensibilidade ao toque e à compressão da musculatura, além disso, em alguns casos, a dor é tão intensa que o paciente chega ao ponto de temer abraços, evitando ser tocado. O sono não é reparador e, mesmo depois de muitas horas dormindo, o paciente não acorda descansado.  As sensações de dor são amplificadas assim como as de queimações e formigamentos e podem ser acompanhadas de enxaqueca e outros tipos e dores de cabeça; síndrome do intestino irritável; disfunção da articulação temporomandibular (ATM); cistite intersticial ou síndrome da bexiga dolorosa (dor ao urinar), ansiedade, bem como depressão.  O diagnóstico é clínico, ou seja, não são necessários exames para comprovar. Dor no corpo por mais de três meses e presença de pontos dolorosos na musculatura podem ser indícios que ajudam a chegar à constatação. Por outro lado, apesar de todo o desconforto provocado pela doença, o diagnóstico precoce e o tratamento adequado ajudam a promover qualidade de vida.  Medicações e mudanças no estilo de vida fazem parte do tratamento da doença. O foco é minimizar os sintomas e melhorar a saúde em geral. Hoje em dia, um dos melhores tratamentos para a doença é a LEDterapia. O dispositivo que contém essa tecnologia é o Sportllux. Através do procedimento de fotobiomodulação, o dispositivo emite ondas de luz de baixa freqüência (vermelha e infravermelha), penetrando diretamente no tecido muscular, promovendo alívio de dores, estimulando a microcirculação da área exposta, alem de ter ação analgésica e anti-inflamatória.",
            titulo: "Fibromialgia afeta cerca de 5% da população no país"
        }
    ]


    constructor(

        private router: Router,
        private toasterService: ToasterService) {
    }

    ngOnInit() {
        // window.location.reload();

    }

    redirecionar(link) {

        window.open(link, '_blank');

    }
}
