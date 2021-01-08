import {Component, OnInit} from '@angular/core';
import {PhraseService} from '../../shared/phrase.service';
import {Phrase} from '../../shared/phrase.class';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase: Phrase = <Phrase>{};

  constructor(private svc: PhraseService, private activatedRout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe((params: Params) =>  {
      this.svc.getPhrase( +params.id).then(res => this.phrase = res);
    });
  }

}
